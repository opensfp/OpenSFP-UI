<template>
  <header>
    <div class="base-container fs-container">
      <div class="flex-container">
        <div class="action">
          <h6>File</h6>
          <div>
            <b-button>New</b-button>
            <b-button>Open</b-button>
            <b-button>Save as</b-button>
          </div>
        </div>
        <div class="action">
          <h6>Data</h6>
          <div>
            <b-button>Set checksum</b-button>
          </div>
        </div>
      </div>

      <div>
        <b-field label="Module type" label-position="on-border">
          <b-select
            v-model="moduleType"
            placeholder="Module type"
            size="is-small"
            class="module-type"
          >
            <option v-for="type in moduleTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </b-select>
        </b-field>
        <b-field label="Address table" label-position="on-border">
          <b-select
            v-model="addressTable"
            placeholder="Address table"
            size="is-small"
            class="address-table"
          >
            <option v-for="(info, name) in addresses" :key="name" :value="name">
              {{ name }}
            </option>
          </b-select>
        </b-field>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
  computed: {
    ...mapState({
      moduleTypes: state => state.config.moduleTypes,
      addresses: state => state.config.addresses[state.init.moduleType],
    }),
    moduleType: {
      get() {
        return this.$store.state.init.moduleType;
      },
      set(type) {
        this.$store.commit('changeModuleType', type);
      },
    },
    addressTable: {
      get() {
        return this.$store.state.init.addressTable;
      },
      set(address) {
        this.$store.commit('changeAddressTable', address);
      },
    },
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss">
.module-type,
.address-table {
  select {
    min-width: 120px;
  }
}
</style>

<style lang="scss" scoped>
header {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);

  .base-container {
    padding-top: 10px;
    padding-bottom: 10px;

    .action {
      margin-right: 16px;

      h6 {
        font-size: 14px;
        color: #888;
        position: relative;
        margin: 0 0 10px;
        font-weight: 600;
        line-height: 1;
      }
    }
  }
}
</style>
