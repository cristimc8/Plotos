import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MathContainer } from "./MathContainer";
import { MathImageAndShortName } from "./MathImageAndShortName";
import { Text } from "@ui-kitten/components";
import { useMath } from "../../hooks/useMath";

const gap = 20;

export interface MathFunctionProps {
  /* The name of the function */
  functionName: string;
  /* The short name of the function */
  functionShortName: string;
  /* The id of the function */
  functionId: number;
  /* Whether the function is selected or not */
  selected: boolean;
}

export const MathFunction = (props: MathFunctionProps) => {
  const {
    setCurrentFunction,
    findById
  } = useMath();

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Function selected: ', props.functionName);
        setCurrentFunction(findById(props.functionId))
      }}
    >
      <View
        style={styles.mathFunctionContainer}
      >
        <MathContainer
          selected={props.selected}
        >
          <MathImageAndShortName functionShortName={props.functionShortName}/>
          <Text style={styles.mathFnName}>
            {props.functionName}
          </Text>
        </MathContainer>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mathFunctionContainer: {
    marginHorizontal: gap / 2,
  },
  mathFnName: {
    fontFamily: 'Lato-Bold',
    fontWeight: '800',
    fontSize: 18,
  }
});
