<template>
    <v-col class="pa-1">
        <v-row class="pa-0 mx-4">
            <v-col cols='2' class="pa-0 ma-0">
                <v-select solo dense class="pa-0 ma-0" :items='saveBox' v-model="saveBoxSelect"></v-select>
            </v-col>
        </v-row>
        <v-row class="ma-0">
            <v-col cols='4'>
                <material-card color="red" full-header>
                <template #heading>
                    <div class="pa-5 white--text">
                    <div class="text-h4 font-weight-light">
                        HV
                    </div>
                    <div class="text-caption">
                        2022/5/10
                    </div>
                    </div>
                </template>
                <v-card-text>
                    <v-simple-table>
                        <template v-slot:default>
                            <tbody>
                            <tr v-for="item in HVdata" :key="item.key">
                                <td>{{ item.key }}</td>
                                <td>{{ item.value }}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card-text>
                </material-card>
            </v-col>
            <v-col cols='4'>
                <material-card color="blue" full-header>
                    <template #heading>
                        <div class="pa-5 white--text">
                        <div class="text-h4 font-weight-light">
                            PCS
                        </div>
                        <div class="text-caption">
                            2022/5/10
                        </div>
                        </div>
                    </template>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <tbody>
                                <tr v-for="item in PCSdata" :key="item.key">
                                    <td>{{ item.key }}</td>
                                    <td>{{ item.value }}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </material-card>
            </v-col>
            <v-col cols='4'>
                <material-card color="green" full-header>
                    <template #heading>
                        <div class="pa-5 white--text">
                        <div class="text-h4 font-weight-light">
                            BESS
                        </div>
                        <div class="text-caption">
                            2022/5/10
                        </div>
                        </div>
                    </template>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <tbody>
                                <tr v-for="item in BESSdata" :key="item.key">
                                    <td>{{ item.key }}</td>
                                    <td>{{ item.value }}</td>
                                </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                    <div style="display:flex">
                        <div class="battery mx-8">
                            <div class="battery-level" style="height: 30%;"></div>
                        </div>
                        <div class="battery-text" style="width:70%">
                            <v-simple-table>
                            <template v-slot:default>
                                <tbody>
                                    <tr>
                                        <td>1000KW</td>
                                    </tr>
                                    <tr>
                                        <td>960V</td>
                                    </tr>
                                    <tr>
                                        <td>60A</td>
                                    </tr>
                                    <tr>
                                        <td>1000KW</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                        </div>
                    </div>
                </material-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    data () {
    return {
        saveBoxSelect: '儲能櫃一',
        saveBox: ['儲能櫃一', '儲能櫃二'],
        HVdata: [
            {
                key: 'Pav',
                value: '0kW',
            },
            {
                key: 'Q',
                value: '0kW',
            },
            {
                key: 'VL1',
                value: '2200V',
            },
            {
                key: 'VL2',
                value: '2200V',
            },
            {
                key: 'VL3',
                value: '2200V',
            },
            {
                key: 'IL1',
                value: '3.5A',
            },
            {
                key: 'IL2',
                value: '3.5A',
            },
            {
                key: 'IL3',
                value: '3.5A',
            }
        ],
        PCSdata: [
            {
                key: 'State',
                value: 'working'
            },
            {
                key: 'Pav',
                value: '0kW',
            },
            {
                key: 'Q',
                value: '0kW',
            },
            {
                key: 'VL1',
                value: '2200V',
            },
            {
                key: 'VL2',
                value: '2200V',
            },
            {
                key: 'VL3',
                value: '2200V',
            },
            {
                key: 'IL1',
                value: '3.5A',
            },
            {
                key: 'IL2',
                value: '3.5A',
            },
            {
                key: 'IL3',
                value: '3.5A',
            }
        ],
        BESSdata: [
            {
                key: 'State',
                value: 'working'
            },
            {
                key: 'SOC',
                value: '95%',
            },
            {
                key: 'SOH',
                value: '90%',
            },
        ]
    }
  }
}
</script>

<style lang="scss" scoped>

td{
    height: 28px !important;
}

$lightning-size: 30px;
.battery {
  margin-top: 15px;  
  border: 3px solid #333;
  width:45px;
  height: 84px;
  padding: 2px;
  border-radius: 4px;
  position: relative;
  
  &:before {
    content: '';
    height: 8px;
    width: 30px;
    background: #333;
    display: block;
    position: absolute;
    top: -8px;
    left: 4px;
    border-radius: 4px 4px 0 0;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid #fff;
    border-radius: 2px;
  }

//   .lightning {
//     background-image: url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cg%3E%3C%2Fg%3E%20%3Cpath%20fill%3D%22%23e81309%22%20d%3D%22M17.927%2012l2.68-10.28c0.040-0.126%200.060-0.261%200.060-0.4%200-0.726-0.587-1.32-1.314-1.32-0.413%200-0.78%200.187-1.019%200.487l-13.38%2017.353c-0.18%200.227-0.287%200.513-0.287%200.827%200%200.733%200.6%201.333%201.333%201.333h8.073l-2.68%2010.28c-0.041%200.127-0.060%200.261-0.060%200.4%200.001%200.727%200.587%201.32%201.314%201.32%200.413%200%200.78-0.186%201.020-0.487l13.379-17.353c0.181-0.227%200.287-0.513%200.287-0.827%200-0.733-0.6-1.333-1.333-1.333h-8.073z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E'); background-repeat: no-repeat;
//     background-size: $lightning-size;
//     height: $lightning-size;
//     width: $lightning-size;
//     content: '';
//     display: inline-block;
//     position: absolute;
//     top:37px;
//     left: 8px;
//   }  
}

.battery-level {
  background: #30b455;  
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  
  &.warn {
    background-color: #EFAF13;
  }
      
}
</style>
