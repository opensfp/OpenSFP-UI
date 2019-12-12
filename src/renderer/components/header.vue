<template>
  <header>
    <div class="base-container">
      <b-dropdown aria-role="menu" :mobile-modal="false">
        <a class="navbar-item" slot="trigger" role="button">
          <span>File</span>
        </a>

        <b-dropdown-item aria-role="menuitem">
          New
        </b-dropdown-item>
        <b-dropdown-item aria-role="menuitem">
          Open
        </b-dropdown-item>
        <b-dropdown-item aria-role="menuitem">
          Save as
        </b-dropdown-item>
        <hr class="dropdown-divider" aria-role="menuitem" />
        <b-dropdown-item aria-role="menuitem">
          Exit
        </b-dropdown-item>
      </b-dropdown>

      <b-dropdown aria-role="menu" :mobile-modal="false">
        <a class="navbar-item" slot="trigger" role="button">
          <span>Help</span>
        </a>

        <b-dropdown-item aria-role="menuitem">
          Check for updates
        </b-dropdown-item>
        <hr class="dropdown-divider" aria-role="menuitem" />
        <b-dropdown-item aria-role="menuitem">
          About opensfp
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
header {
  border-bottom: 1px solid #e8e8e8;
}
</style>
