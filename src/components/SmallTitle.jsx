import { Text, StyleSheet } from "react-native";

const SmallTitle = ({
  children
}) => {

  return (
    <Text style={styles.container}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    lineHeight: 62,
    fontWeight: '600'
  },
});

export default SmallTitle;