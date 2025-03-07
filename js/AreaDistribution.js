(function (){
  var myChart = echarts.init(document.getElementById('area'));
  var option = {
      // backgroundColor: '#000',
      tooltip: {
          trigger: 'item',
          formatter: '{b}: {c}'
      },
      visualMap: {
          min: 0,
          max: 70,
          left: 'left',
          top: 'bottom',
          text: ['High','Low'],           // 文本，默认为数值文本
          calculable: true,
          textStyle: {
            color: '#fff',
          },
    
          inRange: {
              color: ['#F9FC91', '#FFBF3F', '#F62929']
          }
      },
      geo: {
          map: 'world',
          roam: true,
          zoom: 1.2,
          label: {
              emphasis: {
                  show: false
              }
          },
          itemStyle: {
              normal: {
                  areaColor: '#e6f4f1',
                  borderColor: '#404a59'
              },
              emphasis: {
                  areaColor: '#2a333d'
              }
          },
          light: { main: { intensity: 1, shadow: true, shadowQuality: 'high' } }
      },
      series: [
          {
              type: 'map',
              map: 'world',
              geoIndex: 0,
              data: [{"name":"United States","value":62},{"name":"China","value":21},{"name":"United Kingdom","value":16},{"name":"Japan","value":8},{"name":"France","value":7},{"name":"Italy","value":6},{"name":"Germany","value":5},{"name":"South Korea","value":5},{"name":"Canada","value":4},{"name":"New Zealand","value":3},{"name":"Taiwan","value":3},{"name":"India","value":2},{"name":"Switzerland","value":2},{"name":"Mexico","value":1},{"name":"Lebanon","value":1},{"name":"Cyprus","value":1},{"name":"Qatar","value":1},{"name":"Poland","value":1},{"name":"Spain","value":1},{"name":"Iran","value":1},{"name":"Denmark","value":1},{"name":"Sweden","value":1}]
          }
      ]
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})()

