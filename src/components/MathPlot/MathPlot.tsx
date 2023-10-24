import { useMath } from "../../hooks/useMath";
import React, { useEffect, useState } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions, StyleSheet, View } from 'react-native';

export const MathPlot = () => {
  const {
    currentFunction,
    compute
  } = useMath();

  const [xPlot, setXPlot] = useState<number[]>([0]);
  const [yPlot, setYPlot] = useState<any[]>([0]);

  useEffect(() => {
    if (!currentFunction) return;

    const {xValues, yValues} = compute(currentFunction.id);

    setXPlot(xValues);
    setYPlot(yValues);
  }, [currentFunction]);

  // @ts-ignore
  return (
    <View style={styles.resultContainer}>
      <LineChart
        data={{
          labels: xPlot.map((x) => x.toFixed(3)),
          datasets: [
            {
              data: [
                ...(yPlot.map((y) => Number(y.toFixed(3))))
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width - 20}
        withVerticalLabels={false}
        height={400}
        withShadow={false}
        withOuterLines={false}
        chartConfig={{
          backgroundColor: "transparent",
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForBackgroundLines: {
            stroke: "transparent"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
