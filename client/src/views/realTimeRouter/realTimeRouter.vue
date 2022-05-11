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
              <v-list-item-group v-model="routerName" color="primary">
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
        items: [
          { title: '案場資訊', icon: 'mdi-view-dashboard', to: '', name: 'info'},
          { title: '裝置歷史資料', icon: 'mdi-image', to: 'history', name: 'history'},
          { title: '資料分析', icon: 'mdi-help-box', to: 'analysis', name: 'analysis' },
        ]
      }
    },
    methods: {
      ChangeRouter (to) {
        this.$router.push({ path: `/realTimeRouter/${to}`, query: this.$router.history.current.query}).catch(err => {err})
      }
    },
    computed: {
      routerName: {
        get() {
          return this.items.findIndex(x => x.name === this.$router.history.current.name)
        },
        set () {
          return this.items.findIndex(x => x.name === this.$router.history.current.name)
        } 
      }
    },
  }
</script>
<style lang="scss" scoped>

</style>
