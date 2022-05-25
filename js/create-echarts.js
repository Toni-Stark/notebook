var data = [];
RequestApi({url: "map-data",type:"GET", callback: function(res){
        if(res.code === 200) {
        for (var i = 0; i < res.data.length; i ++) {
            let result = res.data[i];
            data.push({
                name:result.name.split(':')[0],
                itemStyle: {
                    normal: {
                        areaColor: '#31398f',
                        borderColor: '#35ff9c'
                    }
                },
                label: {
                    formatter: function (data, type) {
                        let info = data.data;
                        //这里对不同的内容进行标识 a，b，或者可以随便自己起个别的名字
                        return `${info.name}：${info.value}个`;
                    },
                },
                value: result.value
            })
        }
    }
    setCanvasMap(data);
}})
var setCanvasMap = function (data) {
    var myChart = echarts.init(document.getElementById("mapadd"));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '贵州',
            type: 'map',
            mapType: '贵州',
            roam: false,
            top:'8%',
            zoom:1.2,
            x:'10%',
            selectedMode : 'single',
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#ffffff",
                            fontSize: 18
                        }
                    },
                    borderColor:'#61c9f3',//区块的边框颜色
                    areaColor: '#31398f',
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#ffffff'
                        },
                    },
                    areaColor: '#60c7f2',
                }
            },
            data: data
        }]
    };
    myChart.setOption(option);
}