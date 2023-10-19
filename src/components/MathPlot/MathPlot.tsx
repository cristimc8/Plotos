import { all, create } from 'mathjs';
import { useMath } from "../../hooks/useMath";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions, View } from 'react-native';
import { Text } from '@ui-kitten/components';

export const MathPlot = () => {
  const {
    currentFunction,
  } = useMath();

  const math = create(all);

  const [doneCalc, setDoneCalc] = useState(false);
  const [data, setData] = useState<any[]>([1, 2, 3]);

  let chartConfig = {};

  const xValues: number[] = [];
  const yValues: any[] = [];
  let filteredXValues: number[] = [0, 0, 0];
  let filteredYValues: any[] = [0, 0, 0];

  useEffect(() => {
    if (!currentFunction) return;

    for (let x = 0.4; x <= 0.6; x += 0.1) {
      const result = math.evaluate(currentFunction.mathJsFormula, {x});
      console.log('result: ', result);
      xValues.push(x);
      yValues.push(result);
    }
    console.log('xValues: ', xValues);
    console.log('yValues: ', yValues);

    filteredXValues = xValues.filter((_, i) => {
      const y = yValues[i];
      if (y === Infinity || y === -Infinity || Number.isNaN(y)) {
        console.log('y is infinity or NaN: ', y);
        return false;
      }
      return true;
    });
    filteredYValues = yValues.filter((y, i) => {
      if (y === Infinity || y === -Infinity || Number.isNaN(y)) {
        console.log('y is infinity or NaN: ', y);
        return false;
      }
      return true;
    });

    console.log('filteredXValues: ', filteredXValues);
    console.log('filteredYValues: ', filteredYValues);

    setTimeout(() => {
      setDoneCalc(true);
    }, 1000);


  }, [currentFunction]);

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  // @ts-ignore
  return (
    <View key={filteredYValues[0].toString()}>
      <Text>Bezier Line Chart</Text>
      {!doneCalc ? null : (
        <LineChart key={filteredYValues[0].toString()}
          data={{
            labels: filteredXValues.map((x) => x.toFixed(2)),
            datasets: [
              {
                data: [
                  ...(filteredYValues.map((y) => Number(y.toFixed(0))))
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      )}
    </View>
  )
}
