import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const Matrix = ({
  elements
}) => {

  return (
    <TouchableOpacity onPress={() => alert('1')}>
      <View style={{position: 'relative', height: 300, backgroundColor: 'silver'}}>
        {elements[0].val >= 1 && <Image style={styles.e_1} source={require('../../assets/matrix_elements/1.png')} />}
        {elements[1].val >= 1 && <Image style={styles.e_2} source={require('../../assets/matrix_elements/2.png')} />}
        {elements[2].val >= 1 && <Image style={styles.e_3} source={require('../../assets/matrix_elements/3.png')} />}
        {elements[3].val >= 1 && <Image style={styles.e_4} source={require('../../assets/matrix_elements/4.png')} />}
        {elements[4].val >= 1 && <Image style={styles.e_5} source={require('../../assets/matrix_elements/5.png')} />}
        {elements[5].val >= 1 && <Image style={styles.e_6} source={require('../../assets/matrix_elements/6.png')} />}
        {elements[6].val >= 1 && <Image style={styles.e_7} source={require('../../assets/matrix_elements/7.png')} />}
        {elements[7].val >= 1 && <Image style={styles.e_8} source={require('../../assets/matrix_elements/8.png')} />}
        {elements[0].val >= 2 && <Image style={styles.e_11} source={require('../../assets/matrix_elements/11.png')} />}
        {elements[1].val >= 2 && <Image style={styles.e_22} source={require('../../assets/matrix_elements/22.png')} />}
        {elements[2].val >= 2 && <Image style={styles.e_33} source={require('../../assets/matrix_elements/33.png')} />}
        {elements[3].val >= 2 && <Image style={styles.e_44} source={require('../../assets/matrix_elements/44.png')} />}
        {elements[4].val >= 2 && <Image style={styles.e_55} source={require('../../assets/matrix_elements/55.png')} />}
        {elements[5].val >= 2 && <Image style={styles.e_66} source={require('../../assets/matrix_elements/66.png')} />}
        {elements[6].val >= 2 && <Image style={styles.e_77} source={require('../../assets/matrix_elements/77.png')} />}
        {elements[7].val >= 2 && <Image style={styles.e_88} source={require('../../assets/matrix_elements/88.png')} />}
        {elements[0].val >= 3 && <Image style={styles.e_111} source={require('../../assets/matrix_elements/111.png')} />}
        {elements[1].val >= 3 && <Image style={styles.e_222} source={require('../../assets/matrix_elements/222.png')} />}
        {elements[2].val >= 3 && <Image style={styles.e_333} source={require('../../assets/matrix_elements/333.png')} />}
        {elements[3].val >= 3 && <Image style={styles.e_444} source={require('../../assets/matrix_elements/444.png')} />}
        {elements[4].val >= 3 && <Image style={styles.e_555} source={require('../../assets/matrix_elements/555.png')} />}
        {elements[5].val >= 3 && <Image style={styles.e_666} source={require('../../assets/matrix_elements/888.png')} />}
        {elements[6].val >= 3 && <Image style={styles.e_777} source={require('../../assets/matrix_elements/777.png')} />}
        {elements[7].val >= 3 && <Image style={styles.e_888} source={require('../../assets/matrix_elements/666.png')} />}

        <Text style={styles.e_title_1}>{elements[0].name}</Text>
        <Text style={styles.e_title_2}>{elements[1].name}</Text>
        <Text style={styles.e_title_3}>{elements[2].name}</Text>
        <Text style={styles.e_title_4}>{elements[3].name}</Text>
        <Text style={styles.e_title_5}>{elements[4].name}</Text>
        <Text style={styles.e_title_6}>{elements[5].name}</Text>
        <Text style={styles.e_title_7}>{elements[6].name}</Text>
        <Text style={styles.e_title_8}>{elements[7].name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
  },
  e_1: {
    position: 'absolute',
    left: 140,
    top: 90,
    zIndex: 10,
  },
  e_11: {
    position: 'absolute',
    left: 140,
    top: 53,
    zIndex: 9,
  },
  e_111: {
    position: 'absolute',
    left: 140,
    top: 33,
  },
  e_2: {
    position: 'absolute',
    left: 140,
    top: 110,
    zIndex: 10,
  },
  e_222: {
    position: 'absolute',
    left: 140,
    top: 69,
  },
  e_22: {
    position: 'absolute',
    left: 138,
    top: 84,
    zIndex: 9,
  },
  e_3: {
    position: 'absolute',
    left: 140,
    top: 151,
    zIndex: 10,
  },
  e_333: {
    position: 'absolute',
    left: 140,
    top: 148,
  },
  e_33: {
    position: 'absolute',
    left: 138,
    top: 149,
    zIndex: 9,
  },
  e_4: {
    position: 'absolute',
    left: 140,
    top: 151,
    zIndex: 10,
  },
  e_44: {
    position: 'absolute',
    left: 138,
    top: 148,
    zIndex: 9,
  },
  e_444: {
    position: 'absolute',
    left: 142,
    top: 147,
  },
  e_5: {
    position: 'absolute',
    left: 97,
    top: 151,
    zIndex: 10,
  },
  e_55: {
    position: 'absolute',
    left: 71,
    top: 148,
    zIndex: 9,
  },
  e_555: {
    position: 'absolute',
    left: 60,
    top: 146,
  },
  e_6: {
    position: 'absolute',
    left: 80,
    top: 151,
    zIndex: 10,
  },
  e_66: {
    position: 'absolute',
    left: 43,
    top: 149,
    zIndex: 9,
  },
  e_666: {
    position: 'absolute',
    left: 25,
    top: 148,
  },
  e_7: {
    position: 'absolute',
    left: 80,
    top: 108,
    zIndex: 10,
  },
  e_77: {
    position: 'absolute',
    left: 42,
    top: 81,
    zIndex: 9,
  },
  e_777: {
    position: 'absolute',
    left: 24,
    top: 68,
  },
  e_8: {
    position: 'absolute',
    left: 99,
    top: 90,
    zIndex: 10,
  },
  e_88: {
    position: 'absolute',
    left: 72,
    top: 52,
    zIndex: 9,
  },
  e_888: {
    position: 'absolute',
    left: 58,
    top: 34,
  },
  e_title_1: {
    position: 'absolute',
    left: 200,
    top: 20,
  },
  e_title_2: {
    position: 'absolute',
    left: 320,
    top: 100,
  },
  e_title_3: {
    position: 'absolute',
    left: 320,
    top: 190,
  },
  e_title_4: {
    position: 'absolute',
    left: 250,
    top: 260,
  },
  e_title_5: {
    position: 'absolute',
    left: 125,
    top: 260,
  },
  e_title_6: {
    position: 'absolute',
    left: 70,
    top: 190,
  },
  e_title_7: {
    position: 'absolute',
    left: 70,
    top: 110,
  },
  e_title_8: {
    position: 'absolute',
    left: 110,
    top: 40,
  },
});

export default Matrix;