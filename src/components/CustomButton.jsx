import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  color = 'orange',
  textColor = 'white',
  onPress
}) => {

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{...styles.container, ...{backgroundColor: color}}}>
      <Text style={{color: textColor}}>{title}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;