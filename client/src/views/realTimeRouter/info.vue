<template>
    <v-col class="pa-1">
        <v-row class="pa-0 mx-4">
            <v-col cols='2' class="pa-0 ma-0">
                <v-select class="pa-0 ma-0" label='儲能櫃' :items='saveBox' v-model="saveBoxSelect"></v-select>
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

<style>

</style>
