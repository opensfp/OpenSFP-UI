<template>
  <div id="viewer" class="page">
    <div class="columns">
      <div class="column">
        <b-field label="Vendor name" label-position="on-border">
          <b-input v-model="name" size="is-small"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Vendor P/N" label-position="on-border">
          <b-input v-model="pn" size="is-small"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Vendor S/N" label-position="on-border">
          <b-input v-model="sn" size="is-small"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Date" label-position="on-border">
          <b-input v-model="date" size="is-small"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column is-half">
        <BinEditor
          :data="EEPROMs"
          :colHeaders="colHeaders"
          :rowHeaders="rowHeaders"
          :colWidth="colWidth"
          :focus="focus"
          @onAfterChange="afterChange"
          @onAfterSelection="afterSelection"
        />
      </div>
      <div class="column is-half"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import BinEditor from '@/components/bin-editor';

export default {
  name: 'viewer',
  components: {
    BinEditor,
  },
  computed: {
    ...mapState({
      EEPROMs: state => state.init.EEPROMs,
      colHeaders: state => state.config.colHeaders,
      rowHeaders: state =>
        state.config.addresses[state.init.moduleType][state.init.addressTable].rowHeaders,
    }),
  },
  data() {
    return {
      name: '',
      pn: '',
      sn: '',
      date: '',

      colWidth: 0,
      focus: {},
    };
  },
  mounted() {},
  methods: {
    afterChange(data) {
      this.$store.commit('changeEEPROMs', data);
    },

    afterSelection(row, col) {
      this.focus = {
        row,
        col,
      };
    },
  },
};
</script>
