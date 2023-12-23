import { View, Text, StyleSheet } from "react-native";

const EventThemeBlock = ({
  name,
  bgColor
}) => {

  return (
    <View style={styles.eventThemeWrapper}><Text style={{...styles.eventTheme, backgroundColor: bgColor}}>{name}</Text></View>
  );
}

const styles = StyleSheet.create({
  eventThemeWrapper: {
    flexDirection: 'row',
  },
  eventTheme: {
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

export default EventThemeBlock;