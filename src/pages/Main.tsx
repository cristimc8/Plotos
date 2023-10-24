import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { BrandTitle } from "../components/BrandTitle";
import { ImgBackground } from "../components/ImgBackground";
import { MathFunction } from "../components/MathFunction/MathFunction";
import { useMath } from "../hooks/useMath";
// @ts-ignore
import MathView, { MathText } from 'react-native-math-view';
import { Button } from "@ui-kitten/components";
import { MathPlot } from "../components/MathPlot/MathPlot";
import { Functions } from "../assets/functions";


export const Main = () => {
  const {
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

      <View style={{
        marginTop: 30,
        paddingHorizontal: 15,
      }}>
        <MathView
          math={currentFunction?.formula || Functions.toPlot[0].formula}
          style={{
            color: 'white',
            lineBreak: 'always',
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
          <View style={styles.plotContainer}>
            <MathPlot/>
          </View>
        )
      }

      <View style={styles.mathFunctionsContainer}>
        {Functions.toPlot.map((fn) => (
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
  plotContainer: {
    flex: 0,
    height: 400,
    marginTop: 60,
  }
});

