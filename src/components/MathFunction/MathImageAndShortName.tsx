import { Image, StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { MATH_FN_ICONS } from "../../assets/img";

export interface MathImageAndShortNameProps {
  /* The short name of the function */
  functionShortName: string;
}

export const MathImageAndShortName = (props: MathImageAndShortNameProps) => {
  return (
    <View style={styles.mathImageAndShortNameContainer}>
      <Image
        source={getMathImage(props.functionShortName)}
        style={styles.mathImage}
      />
      <Text
        style={styles.mathFnShortName}
      >
        {props.functionShortName}(x)
      </Text>
    </View>
  )
}

const getMathImage = (functionShortName: string) => {
  if(functionShortName in MATH_FN_ICONS) {
    return (MATH_FN_ICONS[functionShortName as keyof typeof MATH_FN_ICONS]).uri;
  }
}

const styles = StyleSheet.create({
  mathImageAndShortNameContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
  },
  mathFnShortName: {
    fontFamily: 'Lato-Bold',
    fontWeight: '400',
    fontSize: 14,
    color: '#C2C2C2',
    marginTop: 6,
  },
  mathImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  }
});
