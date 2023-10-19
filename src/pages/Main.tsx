import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { BrandTitle } from "../components/BrandTitle";
import { ImgBackground } from "../components/ImgBackground";
import { MathFunction } from "../components/MathFunction/MathFunction";
import { useMath } from "../hooks/useMath";
// @ts-ignore
import MathView, { MathText } from 'react-native-math-view';
import { Button } from "@ui-kitten/components";
import { MathPlot } from "../components/MathPlot/MathPlot";


export const Main = () => {
  const {
    allFunctions,
    currentFunction,
    plotButtonText
  } = useMath();

  const [isPlotting, setIsPlotting] = useState(false);


  return (
    <ImgBackground>
      {
        !isPlotting && (
          <View style={styles.brandTitleContainer}>
            <BrandTitle/>
          </View>
        )
      }

      <View>
        <MathView
          math={currentFunction?.formula || allFunctions[0].formula}
          style={{
            color: 'white',
          }}
        />
      </View>

      {!isPlotting && (
        <Button
          onPress={() => {
            setIsPlotting(true)
          }}
          style={{
            backgroundColor: '#0d202c',
            borderColor: 'transparent',
          }}
        >
          {plotButtonText}
        </Button>
      )
      }

      {
        isPlotting && (
          <MathPlot/>
        )
      }

      <View style={styles.mathFunctionsContainer}>
        {allFunctions.map((fn) => (
          <MathFunction
            key={fn.id}
            functionId={fn.id}
            functionName={fn.name}
            functionShortName={fn.shortName}
            selected={currentFunction?.id === fn.id}
          />
        ))}
      </View>
    </ImgBackground>
  )
}

const styles = StyleSheet.create({
  brandTitleContainer: {
    marginTop: '20%',
  },
  mathFunctionsContainer: {
    flexDirection: 'row',
    marginBottom: '8%',
    marginLeft: '10%',
    width: '100%',
  },
});

