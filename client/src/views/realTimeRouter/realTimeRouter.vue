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
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i" @click="ChangeRouter(item.to)">
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
          
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
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
        selectedItem: 0,
        items: [
          { title: '案場資訊', icon: 'mdi-view-dashboard', to: ''},
          { title: '裝置歷史資料', icon: 'mdi-image', to: 'history'},
          { title: '資料分析', icon: 'mdi-help-box', to: 'analysis' },
        ]
      }
    },
    methods: {
      ChangeRouter (to) {
        this.$router.push({ path: `/components/realTimeRouter/${to}`, replace: true, query: this.$router.history.current.query}).catch(err => {err})
      }
    },
    computed: {
    },
  }
</script>
<style lang="scss" scoped>

</style>
