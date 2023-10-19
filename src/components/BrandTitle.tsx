import { Image, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import React from "react";

export const BrandTitle = () => {

  return (
    <View style={styles.brandContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.bigText}>
          Plotos,&nbsp;
        </Text>
        <Text style={styles.smallText}>
          Math Inc.
        </Text>
      </View>

      <Image
        source={require('../assets/img/mathTree.png')}
        style={styles.plotosTree}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  brandContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 150,
  },
  bigText: {
    fontFamily: 'Lato-Bold',
    fontWeight: '900',
    fontSize: 24,
  },
  smallText: {
    fontFamily: 'Lato-Bold',
    fontWeight: '400',
    fontSize: 16,
    color: '#C2C2C2',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  plotosTree: {
    width: 102,
    height: 98,
    borderRadius: 10,
    elevation: 10,
  }
});
