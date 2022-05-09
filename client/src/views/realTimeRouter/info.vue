<template>
  <v-container
    id="dashboard-view"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12" v-for="i in 7" :key="i"> 
        <v-card class="px-5 cardBox" outlined elevation="2" style="border-radius:2px">
              <v-row>
                <v-col cols='3' class="text-h4 font-weight-bold">
                  示範案場
                </v-col>
                <v-col cols='1' class="ml-auto text-h5 font-weight-bold">
                  排程運轉中​
                <v-icon color='green' small>
                  {{'mdi-checkbox-marked-circle'}}
                </v-icon>
                </v-col>
                <v-col cols='1' class="text-h5 font-weight-bold">
                  案場狀態
                  <v-icon color='red' small>
                    {{'mdi-checkbox-marked-circle'}}
                  </v-icon>
                </v-col>
              </v-row>
              <v-row>
                <table style="width: 100%">
                  <tr>
                    <th v-for="i in factoryData" :key="i">{{i}}</th>
                  </tr>
                  <tr>
                    <td>15456</td>
                    <td>15456</td>
                    <td>15456</td>
                    <td>15456</td>
                    <td>15456</td>
                    <td>15456</td>
                    <td>15456</td>
                  </tr>
                </table>
              </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'RealTime',
    data: () => ({
      factoryData: ['建置容量(kWh)', '饋線容量(kW)​', 'SOC(%)', 'SOH(%)​', '充放電(+/-kW)​', '轉換效率(%)​', '直流功率(+/-kW)']
    }),
    computed: {
    },
  }
</script>
<style lang="scss" scoped>
  table {
    border-spacing: 1px;
    width: 100% !important;
    table-layout: fixed;
    margin-bottom: 7px;
  }

  table tr{
    box-sizing: border-box;
    background-color: #cfeaff;
  }
  
  table th {
    padding: 2px;
    text-align: center;
  }

  table td {
    padding: 2px;
    text-align: center;
  }
</style>
