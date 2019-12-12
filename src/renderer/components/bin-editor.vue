<template>
  <hot-table
    id="bin-editor"
    ref="binEditor"
    :className="className"
    :data="data"
    :colHeaders="colHeaders"
    :rowHeaders="rowHeaders"
    licenseKey="non-commercial-and-evaluation"
    :width="width"
    :columnHeaderHeight="colWidth"
    :rowHeaderWidth="colWidth"
    :colWidths="colWidth"
    :rowHeights="colWidth"
    :afterChange="afterChange"
    :afterSelection="afterSelection"
    :cells="setCells"
    :autoRowSize="true"
  />
</template>

<script>
import { HotTable } from '@handsontable/vue';
import 'handsontable/dist/handsontable.full.css';

export default {
  name: 'bin-editor',
  components: {
    HotTable,
  },
  props: {
    className: {
      type: String,
      default: 'htCenter',
    },
    data: {
      type: Array,
      required: true,
    },
    colHeaders: {
      type: Array,
      required: true,
    },
    rowHeaders: {
      type: Array,
      required: true,
    },
    width: {
      type: [Number, String],
      default: '100%',
    },
    focus: {
      type: Object,
      default: () => {},
    },
    setCells: {
      type: Function,
      default: (row, col) => {
        const cellProperties = {};
        // CC BASE, check sum of bytes 0 - 62
        if (row === 3 && col === 15) {
          cellProperties.readOnly = true;
        }
        // CC EXT, check sum of bytes 64 - 94
        if (row === 5 && col === 15) {
          cellProperties.readOnly = true;
        }
        return cellProperties;
      },
    },
  },
  computed: {},
  data() {
    return {
      colWidth: 0,
    };
  },
  mounted() {
    this.editorRef = this.$refs.binEditor.hotInstance;

    this.initColWidth();
    window.addEventListener('resize', this.initColWidth);
  },
  methods: {
    initColWidth() {
      const el = document.getElementById('bin-editor');
      const width = parseInt(el.offsetWidth / 17, 0);

      this.colWidth = width;

      document.documentElement.style.setProperty(
        '--binEditorFontSize',
        `${parseInt(width / 2, 0)}px`,
      );
      document.documentElement.style.setProperty('--binEditorColWidth', `${width}px`);
    },
    afterChange() {
      if (this.editorRef) {
        const data = this.editorRef.getSourceData();
        this.$emit('onAfterChange', data);
      }
    },
    afterSelection(row, col) {
      this.$emit('onAfterSelection', row, col);
    },
    setFocus(row, col) {
      this.editorRef.selectCell(row, col);
    },
    setCellData(row, col, data) {
      this.editorRef.setDataAtCell(row, col, data);
    },
  },
  watch: {
    focus(grid, older) {
      if (grid) {
        const { row, col } = grid;
        const olderRow = older.row;
        const olderCol = older.col;

        if (row !== olderRow || col !== olderCol) {
          this.setFocus(row, col);
        }
      }
    },
  },
};
</script>

<style lang="scss">
#bin-editor {
  .handsontable {
    font-size: var(--binEditorFontSize);

    th,
    td {
      padding: 0 !important;
      line-height: var(--binEditorColWidth);
    }

    thead {
      th {
        .relative {
          padding: 0 !important;
          text-align: center;
        }
      }
    }

    .relative {
      text-align: center;
    }
  }
}
</style>
