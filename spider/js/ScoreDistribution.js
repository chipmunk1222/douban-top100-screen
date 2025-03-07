(function (){
  var chartDom = document.getElementById('score');
  var myChart = echarts.init(chartDom);
  var option;
  
  option = {
    grid: {
      top: '20%', // 设置图表的上间距 
      bottom: '20%', // 设置图表的下间距 
      left: '10%', // 设置图表的左间距 
      right: '10%' // 设置图表的右间距
    },
    tooltip:{
      trigger: 'axis',
      // formatter: '{b} 分: {c} 部电影', // 格式化显示内容 
      // backgroundColor: 'rgba(0,0,0,0.7)', // 背景颜色 
      // textStyle: { color: '#fff'}
    },
    xAxis: {
      type: 'category',
      name: '评分', 
      nameLocation: 'middle', // 设置 x 轴名称的位置 
      nameTextStyle: {
        color: '#fff', // 修改 x 轴名称字体颜色 
        fontSize: 14, 
        padding: [6, 0, 0, 0] // 调整 x 轴名称与轴的距离
      },
      axisLabel: { textStyle: { color: '#fff  ' } },
      data: [8.7, 8.8, 8.9, 9, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7],
      axisLine: { lineStyle: { color: '#fff' } },
    },
    yAxis: {
      type: 'value',
      name: '电影数量', 
      // nameLocation: 'middle', // 设置 x 轴名称的位置 
      nameTextStyle: {
        color: '#fff', // 修改 x 轴名称字体颜色 
        fontSize: 14, 
        padding: [6, 0, 0, 5] // 调整 x 轴名称与轴的距离
      },
      axisLabel: { textStyle: { color: '#fff  ' } },
    },
    series: [
      {
        name: '数量',
        data: [1, 5, 13, 11, 21, 16, 18, 8, 4, 2, 1],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 15,
        emphasis: {
          label: {
            show: true,
            fontSize: 30,
            fontWeight: 'bold'
          }
        },
        lineStyle: {
          color: '#5470C6',
          width: 4,
          type: 'dashed'
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: '#EE6666',
          color: 'yellow'
        }
      }
    ]
  };
  
  option && myChart.setOption(option);
  
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})()
