import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  color = 'orange',
  textColor = 'white',
  onPress,
  borderRadius = 35,
  height = 50
}) => {

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{...styles.container, ...{backgroundColor: color}, ...{borderRadius: borderRadius}, ...{height: height}}}>
      <Text style={{color: textColor}}>{title}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButton;