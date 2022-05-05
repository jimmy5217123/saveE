<template>
  <v-app>
    <default-bar />

    <default-drawer />

    <default-view />

    <!-- <default-footer /> -->

    <!-- <default-settings /> -->
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
      DefaultBar: () => import('./AppBar'),
      DefaultDrawer: () => import('./Drawer'),
      DefaultFooter: () => import('./Footer'),
      DefaultSettings: () => import('./Settings'),
      DefaultView: () => import('./View'),
    },
  }
</script>
