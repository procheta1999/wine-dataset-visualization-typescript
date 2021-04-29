import React from 'react' ;
import ReactEcharts from 'echarts-for-react';
import data from './wine.json' //json data
var c:any=[]; // initialising the array containing the malic_acid values
var a=0;
var b:any=[]; // initialising the array containing alcohol values
var num= data.data.length; // length of the dataset
for (var i=0;i<data.data.length;i++)
{
    c.push(data.data[i].malic_acid); // collecting the array for malic_acid values from the dataset
          a=a+parseFloat(data.data[i].malic_acid); // calculating the sum of the elements of the malic_acid array after changing them to floats (sinc they are all strings)
          b.push(data.data[i].alcohol); // collecting the array for alcohol values from the dataset
}
var avg= a/num; // calculating the average of the malic_acid array
console.log('avg',avg);

// bar plot component

const BarPlot: React.FC =()=>{
    return(
        <ReactEcharts
        option={{
            color: ["#e91e63 ", "#354EF6"],
            title: {
              textAlign: "left",
              left: "0%"
            },
            tooltip: {borderWidth: 0, padding: 10},
            legend: {
              data: [],
              itemGap: 30,
              itemHeight: 15,
              right: "11%",
              top: 20
            },
            calculable: true,
            grid: {
              top: 100,
              bottom: 150,
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  type: "shadow",
                  label: {
                    show: true,
                    formatter: function(params:any) {
                      return params.value.replace("\n", "");
                    }
                  }
                }
              }
            },
            xAxis: [
              {
                axisLabel: {
                  textStyle: {
                    fontSize: 10,
                  }
                },
                axisLine: { lineStyle: { color: "#aaa" }, show: true },
                axisTick: { show: false },
                name: "Alcohol",
                data:b,
                splitLine: { show: false },
                type: "category"
              }
            ],
            yAxis: [
              {
                axisLabel: {
                  textStyle: { fontSize: 10 }
                },
                axisLine: { show: true },
                axisTick: { show: false },
                data: c,
                name: "Malic Acid",
                splitLine: {
                  lineStyle: {
                    type: "dotted"
                  }
                },
                type: "value"
              }
            ],
            series: [{
                data: [avg],
                type: 'bar'
            }]
        }}
        style={{ height: "80vh", left: 50, top: 120, width: "95vw" }}
        opts={{ renderer: "svg" }}
      />
    )
}
export default BarPlot