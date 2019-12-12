<template>
  <div id="app">
    <Header />
    <Action />
    <div class="base-container" style="margin-top: 16px;">
      <b-tabs type="is-boxed" @input="changeRoute">
        <b-tab-item label="Data viewer"></b-tab-item>
        <b-tab-item label="Diff data"></b-tab-item>
      </b-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header';
import Action from '@/components/action';

export default {
  name: 'opensfp',
  components: {
    Header,
    Action,
  },
  created() {},
  methods: {
    changeRoute(index) {
      const { routes } = this.$router.options;
      const { name } = routes[index];
      this.$router.push({ name });
    },
  },
};
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';

// Set your colors
$primary: #2f54eb;
$primary-invert: findColorInvert($primary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  'white': (
    $white,
    $black,
  ),
  'black': (
    $black,
    $white,
  ),
  'light': (
    $light,
    $light-invert,
  ),
  'dark': (
    $dark,
    $dark-invert,
  ),
  'primary': (
    $primary,
    $primary-invert,
  ),
  'info': (
    $info,
    $info-invert,
  ),
  'success': (
    $success,
    $success-invert,
  ),
  'warning': (
    $warning,
    $warning-invert,
  ),
  'danger': (
    $danger,
    $danger-invert,
  ),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
