import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { View, Text } from 'react-native';
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

export default function WeightChart() {
  return (
    <View style={{ paddingHorizontal: 10}}>
      
  <LineChart
    data={{
      labels: ['11/12', '12/12', '13/12', '14/12', '15/12' ],
      datasets: [
        {
          data: [
            120, 111.3, 108.7, 107.2, 105.5
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width - 40} // from react-native
    height={220}
    yAxisSuffix="Kg"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#1c1c1c",
      backgroundGradientFrom: "#1c1c1c",
      backgroundGradientTo: "#1c1c1c",
      decimalPlaces: 1, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "3",
        strokeWidth: "2",
        stroke: "#FFF"
      }
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
    </View>
  )
}
