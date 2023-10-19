import { all, create } from 'mathjs';
import { useMath } from "../../hooks/useMath";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import { Text } from "@ui-kitten/components";

export const MathPlot = () => {
  const {
    currentFunction,
  } = useMath();

  const math = create(all);

  const xValues: number[] = [];
  const yValues: any[] = [];

  useEffect(() => {
    if (!currentFunction) return;

    for (let x = 0; x <= 1; x += 0.1) {
      const result = math.evaluate(currentFunction.mathJsFormula, {x});
      xValues.push(x);
      yValues.push(result);
    }
    console.log('xValues: ', xValues);
    console.log('yValues: ', yValues);
  }, [currentFunction]);

  return (
    <View style={styles.computedValuesContainer}>
      <Text>
        The computed x and y sets:
      </Text>
      {
        xValues.map((x, index) => (
          <View
            key={index}
            style={styles.xAndYSet}
          >
            <Text>
              x: {x}
            </Text>
            <Text>
              y: {yValues[index]}
            </Text>
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  computedValuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  xAndYSet: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginHorizontal: 10,
  }
});
