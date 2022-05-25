<template>
  <v-app-bar
    id="default-app-bar"
    app
    absolute
    class="v-bar--underline"
    color="#042948"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="55"
    style="position: fixed"
  >
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"/>

    <default-drawer-toggle class="hidden-sm-and-down" />

    <v-toolbar-title class="font-weight-light text-h5" style="color: white" v-text="name"/>

    <v-spacer />

    <default-go-home />

    <default-account />
  </v-app-bar>
</template>

<script>
  // Utilities
  import { get, sync } from 'vuex-pathify'

  export default {
    name: 'DefaultBar',

    components: {
      DefaultAccount: () => import('./widgets/Account'),
      DefaultDrawerToggle: () => import('./widgets/DrawerToggle'),
      DefaultGoHome: () => import('./widgets/GoHome'),
      DefaultNotifications: () => import('./widgets/Notifications'),
      DefaultSearch: () => import('./widgets/Search')
    },

    computed: {
      ...sync('app', [
        'drawer',
        'mini',
      ]),
      name: get('route/name'),
    },
  }
</script>
