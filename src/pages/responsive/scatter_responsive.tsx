import React from 'react';
import ReactEcharts from 'echarts-for-react';
import data from '../wine.json'
var a:any=[]; //initialising the array containing the hue values
var b:any=[]; // initialising the array containing the color_intensity values
var d:any=[]; // intialising the array containing the pair of color_intensity value and hue value
// props
interface Props {
    width: string,
}
for (var i=0;i<data.data.length;i++)
{
          a.push(data.data[i].hue); // pushing values to the hue array
          b.push(data.data[i].color_intensity); // pushing values to the color_intensity array
          var c=[data.data[i].color_intensity,data.data[i].hue]; //  c array
          d.push(c); // pushing c array to d array
}
console.log('d',d);

// scatter plot component 

const ScatterPlotRes: React.FC<Props> =(props): JSX.Element =>{
    console.log('width',props.width);
    return(
        <ReactEcharts
        option={{
            color: ["#e91e63 ", "#354EF6"],
            title: {
              subtext: "Data from the Wine Dataset",
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
              width: parseInt(props.width),
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
                data: b,
                name: "Color Intensity",
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
                data: a,
                name: "Hue",
                splitLine: {
                  lineStyle: {
                    type: "dotted"
                  }
                },
                type: "value"
              }
            ],
    series: [{
        symbolSize: 10,
        data: d,
        type: 'scatter'
    }]
        }}
        style={{ height: "80vh", left: 50, top: 50, width: "95vw" }}
        opts={{ renderer: "svg" }}
      />
    )
}
export default ScatterPlotRes