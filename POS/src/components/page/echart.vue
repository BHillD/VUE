<template>
    <div id="echart">
        <div id="nav">
          Chart
        </div>
        <div id="pie">

        </div>
        <div id="line">

        </div>
    </div>
</template>

<script>
import echarts from 'echarts';

export default {
    data(){
        return{
            pie:null,
            line:null
        }
    },
    methods:{
        pieChart:function(){
            this.pie=echarts.init(document.getElementById('pie'));
            this.pie.setOption({
                    title : {
                        text: '店铺收入',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient : 'vertical',
                        x : 'left',
                        data:['店内消费','外卖订单','广告赞助']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {
                                show: true, 
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '25%',
                                        width: '50%',
                                        funnelAlign: 'left',
                                        max: 1548
                                    }
                                }
                            },
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    series : [
                        {
                            name:'收入来源',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:645, name:'外卖订单'},
                                {value:234, name:'店内消费'},
                                {value:135, name:'广告赞助'},
                            ]
                        }
                    ]
            })
        },

        lineChart(){
            this.line=echarts.init(document.getElementById('line'));
            this.line.setOption({
                title : {
                        text: '本周收支',
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['收入','支出']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            axisLabel : {
                                formatter: '{value} ￥'
                            }
                        }
                    ],
                    series : [
                        {
                            name:'收入',
                            type:'line',
                            data:[11, 11, 15, 13, 12, 13, 10],
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name:'支出',
                            type:'line',
                            data:[5, 7, 2, 5, 3, 2, 3],
                            markPoint : {
                                data : [
                                    {type : 'max', name: '最大值'},
                                    {type : 'min', name: '最小值'}
                                ]
                            },
                            markLine : {
                                data : [
                                    {type : 'average', name : '平均值'}
                                ]
                            }
                        }
                    ]
            })
        },

        draw(){
            this.pieChart()
            this.lineChart()
        }
    },

    mounted(){
        this.draw()
    }
}
</script>

<style scoped>
    #echart{
         float: right;
         padding: 0px;
         margin: 0px;
         height: 92%;
         width: 92%;
         background-color: #f2f2f2
    }

    #nav{
        margin-top:20px;
        height: 30px;
        line-height: 30px;
        text-align: left;
        font-weight: bold;
        margin-left:50px;
    }

    #pie{
        display: inline-block;
        margin:0 auto;
        margin-top:20px;
        height: 80%;
        width: 40%;
    }

    #line{
        display: inline-block;
        margin:0 auto;
        margin-top:20px;
        height: 65%;
        width: 40%;
    }
</style>


