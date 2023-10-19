import { StyleSheet, View } from "react-native";

export interface MathContainerProps {
  selected: boolean;
  children?: React.ReactNode;
}

export const MathContainer = (props: MathContainerProps) => {

  return (
    <View
      style={{
        ...styles.mathContainer,
        borderWidth: props.selected ? 2 : 0,
    }}
    >

      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  mathContainer: {
    height: 150,
    width: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    backgroundColor: '#C8C8C830',
    padding: 8,
    borderColor: '#00C2FF',
  },
});
