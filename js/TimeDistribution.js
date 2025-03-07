(function (){
  var chartDom = document.getElementById('time');
  var myChart = echarts.init(chartDom);
  var option;
  
  // prettier-ignore
  let dataAxis = [1936, 1939, 1953, 1957, 1961, 1965, 1972, 1974, 1975, 1984, 1986, 1987, 1988, 1989, 1991, 1992, 1993, 1994, 1995, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2006, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
  // prettier-ignore
  let data = [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 3, 7, 4, 5, 4, 3, 3, 4, 5, 4, 5, 4, 4, 5, 4, 4, 2, 2, 2, 1, 3, 1, 3];
  let yMax = 500;
  let dataShadow = [];
  for (let i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
  }
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '20%', // 设置图表的上间距 
      bottom: '20%', // 设置图表的下间距 
      left: '10%', // 设置图表的左间距 
      right: '10%' // 设置图表的右间距
    },
    xAxis: {
      data: dataAxis,
      nameLocation: 'middle', // 设置 x 轴名称的位置 
      nameTextStyle: { 
        color: '#ff7f50', // 修改 x 轴名称字体颜色 
        fontSize: 16, 
        padding: [10, 0, 0, 0] // 调整 x 轴名称与轴的距离 
      },
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: true
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999',
         textStyle: { color: '#fff' }
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        name: '电影数量',
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: data
      }
    ]
  };
  // Enable data zoom when user click bar.
  const zoomSize = 6;
  myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
      type: 'dataZoom',
      startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
      endValue:
        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
  });
  
  option && myChart.setOption(option);
  
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})()
