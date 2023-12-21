import { Text, StyleSheet } from "react-native";

const MiddleTitle = ({
  children
}) => {

  return (
    <Text style={styles.container}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 22,
    lineHeight: 62,
    fontWeight: '700'
  },
});

export default MiddleTitle;