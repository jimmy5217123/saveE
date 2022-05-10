<template>
    <v-col class="pa-1">
        <v-row class="pa-0 mx-4">
            <v-col cols='2' class="pa-0 ma-0">
                <v-select solo dense class="pa-0 ma-0" :items='deciveBox' v-model="deciveBoxSelect"></v-select>
            </v-col>
        </v-row>
        <v-row class="pa-0 mx-4">
            <v-col class="pa-0 ma-0">
                <v-card>
                    <Highcharts :options="eTodayChart" />
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
            eTodayChart: {
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
                    verticalAlign: 'top',
                    floating: false
                },
                yAxis: [
                    {
                        title: {
                        text: '發電量 (kWh)'
                        }
                    },
                    {
                        title: {
                        text: '日照量 (kWh/m2)'
                        },
                        opposite: true
                    },
                    {
                        title: {
                        text: '累計發電量 (kWh)'
                        },
                        opposite: true
                    }
                ],
                tooltip: {
                    shared: true
                },
                series: [
                {
                    color: 'rgb(255, 192, 0)',
                    type: 'column',
                    name: '目標發電量 (kWh)',
                    data: [60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 62000, 62000, 62000],
                    yAxis: 0,
                    visible: true
                },
                {
                    color: 'rgb(124,181,236)',
                    type: 'column',
                    name: '實際發電量 (kWh)',
                    data: [50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000],
                    yAxis: 0,
                    visible: true
                },
                {
                    color: 'rgb(255, 192, 0)',
                    name: '目標日照 (kWh/m2)',
                    data: [110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110],
                    yAxis: 1,
                    visible: true
                },
                {
                    color: 'rgb(124,181,236)',
                    name: '實際日照 (kWh/m2)',
                    data: [100, 80, 100, 80, 90, 100, 100, 100, 100],
                    yAxis: 1,
                    visible: true
                },
                {
                    color: 'black',
                    name: '實際累積發電量 (kWh)',
                    data: [650000, 700000, 750000, 800000, 850000, 900000, 950000, 1000000, 1050000],
                    yAxis: 2,
                    visible: true
                }],
                responsive: {
                    rules: [{
                        condition: {
                        maxWidth: 500
                        },
                        chartOptions: {
                        legend: {
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
