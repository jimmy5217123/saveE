<template>
  <v-list-item class="mb-0 justify-space-between pl-3">
    <!-- <v-list-item-avatar> -->
      <v-img
        max-height="60"
        max-width="60"
        style="margin-bottom:7px"
        :src="require('@/assets/acme-logo.png')"
      />
    <!-- </v-list-item-avatar> -->

    <v-list-item-content class="pl-2">
      <v-list-item-title class="text-h4">
        <span class="primary--text">雲端儲能監控中心</span>
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'

  export default {
    name: 'DefaultDrawerHeader',

    computed: { version: get('app/version') },
  }
</script>
