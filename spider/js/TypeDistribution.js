// (function (){
//   var chartDom = document.getElementById('type');
//   var myChart = echarts.init(chartDom);
//   var option;

//   option = {
//     legend: {
//       top: 'bottom'
//     },
//     toolbox: {
//       show: true,
//       feature: {
//         mark: { show: true },
//         dataView: { show: true, readOnly: false },
//         restore: { show: true },
//         saveAsImage: { show: true }
//       },
//     },
//     series: [
//       {
//         name: 'Nightingale Chart',
//         type: 'pie',
//         radius: ['10%', '70%'],
//         center: ['50%', '40%'],
//         roseType: 'radius',
//         itemStyle: {
//           borderRadius: 8
//         },
//         data: [{"name":"剧情","value":79},{"name":"喜剧","value":21},{"name":"冒险","value":21},{"name":"爱情","value":20},{"name":"奇幻","value":18},{"name":"犯罪","value":16},{"name":"惊悚","value":13},{"name":"动作","value":12},{"name":"悬疑","value":12},{"name":"动画","value":10},{"name":"其他","value":64}]
//       }
//     ]
//   };

//   option && myChart.setOption(option);
//   window.addEventListener("resize", function () {
//     myChart.resize();
//   });
// })()

(function (){
  var chartDom = document.getElementById('type');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   // top: '5%',
    //   left: '5%'
    // },
    series: [
      {
        name: '电影类型',
        type: 'pie',
        radius: ['40%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          position: 'outside'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: true,
          length: 15, length2: 10, smooth: true

        },
        data: [{"name":"剧情","value":79},{"name":"喜剧","value":21},{"name":"冒险","value":21},{"name":"爱情","value":20},{"name":"奇幻","value":18},{"name":"犯罪","value":16},{"name":"惊悚","value":13},{"name":"动作","value":12},{"name":"悬疑","value":12},{"name":"动画","value":10},{"name":"科幻","value":9},{"name":"传记","value":8},{"name":"家庭","value":7},{"name":"战争","value":7},{"name":"音乐","value":5},{"name":"其他","value":18}]
      }
    ]
  };

  option && myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})()
