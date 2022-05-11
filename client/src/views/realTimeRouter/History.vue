<template>
    <v-col class="pa-1">
        <v-row class="pa-0 mx-4">
            <v-col cols='2' class="pa-0 ma-0">
                <v-select solo dense class="pa-0 ma-0" :items='deciveBox' v-model="deciveBoxSelect"></v-select>
            </v-col>
        </v-row>
        <v-row class="pa-0 mx-4">
            <v-col class="pa-0 ma-0">
                <v-card class="pa-5">
                    <Highcharts :options="historyChart" />
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
export default {
    data () {
        return {
            deciveBox: ['BES', 'PCS', 'HV Meter'],
            deciveBoxSelect: 'BES',
            historyChart: {
                chart: {
                    backgroundColor: null,
                    events: {}
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: []
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                        enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    floating: false
                },
                yAxis: [
                    {
                        title: {
                            text: ''
                        },
                        opposite: false
                    },
                    {
                        title: {
                            text: ''
                        },
                        opposite: true
                    },
                    {
                        title: {
                            text: ''
                        },
                        opposite: true
                    }
                ],
                tooltip: {
                    shared: true
                },
                series: [
                {
                    name: '電壓',
                    data: [850, 850, 850, 850, 850, 850, 850, 850, 850, 850, 850, 850],
                    yAxis: 0,
                    visible: true
                },
                {
                    name: '電流',
                    data: [759, 759, 759, 759, 759, 759, 759, 759, 759],
                    yAxis: 0,
                    visible: true
                },
                {
                    name: '功率',
                    data: [680, 680, 680, 680, 680, 680, 680, 680, 680, 680, 680, 680],
                    yAxis: 0,
                    visible: true
                }],
                responsive: {
                    rules: [
                        {
                            condition: 
                            {
                                maxWidth: 500
                            },
                        chartOptions: 
                        {
                            legend: 
                            {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom',
                                y: 0
                            }
                        }
                    }]
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
