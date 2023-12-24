import { Text, StyleSheet } from "react-native";

const MainTitle = ({
  children
}) => {

  return (
    <Text style={styles.container}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    lineHeight: 62,
    fontWeight: '800',
    fontFamily: 'Montserrat-Black'
  },
});

export default MainTitle;