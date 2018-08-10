
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div id="mapDemo" style="width: 100%;height: 600px; border: 1px solid ;"> </div>
</body>
<script src="assets/plugins/jquery/jquery.js"></script>
<script src="assets/plugins/echarts4/echarts4.min.js"></script>
<script>
    $(function(){
        $.get('assets/plugins/echarts4/json/henan.json', function (henanJson) {
            echarts.registerMap('河南', henanJson);
            var chart = echarts.init(document.getElementById('mapDemo'));
            var   option = {
                series:[
                    {
                        name:'1',
                        type:'map',
                        map:'河南',
                        zoom:0.8,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        mapLocation:{
                            y:60
                        },
                        itemSytle:{
                            emphasis:{label:{show:false}}
                        },
                        data:[
                        ]
                    }
                ],
 
            };
            chart.setOption(option);
            chart.resize()
        })
 
    })
</script>
</html>