<template>
<div id="app">
    <v-row class="ma-0">
        <v-card height="200px" width="256">
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Application
                </v-list-item-title>
                <v-list-item-subtitle>

                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
      
            <v-divider></v-divider>
      
            <v-list dense nav>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
        
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
        <router-view />
    </v-row>
</div>
</template>

<script>
  export default {
    name: 'RealTime',
    data () {
      return {
        items: [
          { title: '案場資訊', icon: 'mdi-view-dashboard' },
          { title: '裝置歷史資料', icon: 'mdi-image' },
          { title: '資料分析', icon: 'mdi-help-box' },
        ]
      }
    },
    computed: {
    },
  }
</script>
<style lang="scss" scoped>

</style>
