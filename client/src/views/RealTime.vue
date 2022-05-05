<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12" v-for="i in 7" :key="i"> 
        <v-card class="px-5 cardBox" loading outlined elevation="3" style="border-radius:0px">
              <v-row style="color: white; border-bottom: 1px solid yellow">
                <v-col cols='3' class="text-h4 font-weight-light">
                  示範案場
                </v-col>
                <v-col cols='1' class="ml-auto text-h5 font-weight-light">
                  排程運轉中​
                <v-icon color='green' small>
                  {{'mdi-checkbox-marked-circle'}}
                </v-icon>
                </v-col>
                <v-col cols='1' class="text-h5 font-weight-light">
                  案場狀態
                  <v-icon color='red' small>
                    {{'mdi-checkbox-marked-circle'}}
                  </v-icon>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols='3' v-for="i in factoryData" :key="i">
                  <v-card elevation="4" class="cardContiner">
                    <v-row style="color:black">
                      <v-col cols='6' style="text-align: center" class="mx-0 pa-0 ">{{i}}</v-col>
                      <v-col cols='6' style="text-align: center" class="mx-0 pa-0 ">1252</v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import { get } from 'vuex-pathify'
  import Vue from 'vue'

  const lineSmooth = Vue.chartist.Interpolation.cardinal({
    tension: 0,
  })

  export default {
    name: 'RealTime',
    data: () => ({
      factoryData: ['建置容量(kWh)', '饋線容量(kW)​', 'SOC(%)', 'SOH(%)​', '充放電(+/-kW)​', '轉換效率(%)​', '直流功率(+/-kW)', 'SBSPM(%)']
    }),
    computed: {
    },
  }
</script>
<style scoped>
.cardContiner {
  background: linear-gradient(180deg,#fff 0%,#b4b5c2 50%, #fff 150%);
  /* background: linear-gradient(180deg,#fff 0%,#b4b6dd 50%, #fff 150%); */
}
.cardBox {
  background: linear-gradient(135deg,rgb(218, 213, 213) -70%,#1c28d6d5 50%, rgb(253, 241, 241) 150%);
  /* background: #1c28d6 ; */
}
</style>
