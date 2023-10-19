import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { Layout } from "@ui-kitten/components";

export interface ImageBackgroundProps {
  children?: React.ReactNode;
}

export const ImgBackground = (props: ImageBackgroundProps) => {

  return (
    <Layout style={styles.container}>
      <ImageBackground
        source={require('../assets/img/mathTree.png')}
        style={styles.backgroundImage}
        blurRadius={160}
      />

      {props.children}
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  }
});

