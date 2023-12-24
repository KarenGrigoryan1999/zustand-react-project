import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

const Matrix = ({
  elements
}) => {

  return (
    <TouchableOpacity onPress={() => alert('1')}>
      <View style={{position: 'relative', height: 300}}>
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
    left: 128,
    top: 90,
    zIndex: 10,
  },
  e_11: {
    position: 'absolute',
    left: 126,
    top: 53,
    zIndex: 9,
  },
  e_111: {
    position: 'absolute',
    left: 125,
    top: 33,
  },
  e_2: {
    position: 'absolute',
    left: 127,
    top: 110,
    zIndex: 10,
  },
  e_222: {
    position: 'absolute',
    left: 123,
    top: 70,
  },
  e_22: {
    position: 'absolute',
    left: 125,
    top: 84,
    zIndex: 9,
  },
  e_3: {
    position: 'absolute',
    left: 127,
    top: 151,
    zIndex: 10,
  },
  e_333: {
    position: 'absolute',
    left: 124,
    top: 148,
  },
  e_33: {
    position: 'absolute',
    left: 125,
    top: 149,
    zIndex: 9,
  },
  e_4: {
    position: 'absolute',
    left: 128,
    top: 150,
    zIndex: 10,
  },
  e_44: {
    position: 'absolute',
    left: 125,
    top: 148,
    zIndex: 9,
  },
  e_444: {
    position: 'absolute',
    left: 124,
    top: 145,
  },
  e_5: {
    position: 'absolute',
    left: 86,
    top: 150,
    zIndex: 10,
  },
  e_55: {
    position: 'absolute',
    left: 57,
    top: 148,
    zIndex: 9,
  },
  e_555: {
    position: 'absolute',
    left: 42,
    top: 145,
  },
  e_6: {
    position: 'absolute',
    left: 69,
    top: 150,
    zIndex: 10,
  },
  e_66: {
    position: 'absolute',
    left: 29,
    top: 149,
    zIndex: 9,
  },
  e_666: {
    position: 'absolute',
    left: 10,
    top: 148,
  },
  e_7: {
    position: 'absolute',
    left: 69,
    top: 108,
    zIndex: 10,
  },
  e_77: {
    position: 'absolute',
    left: 30,
    top: 81,
    zIndex: 9,
  },
  e_777: {
    position: 'absolute',
    left: 11,
    top: 67,
  },
  e_8: {
    position: 'absolute',
    left: 87,
    top: 90,
    zIndex: 10,
  },
  e_88: {
    position: 'absolute',
    left: 60,
    top: 52,
    zIndex: 9,
  },
  e_888: {
    position: 'absolute',
    left: 47,
    top: 34,
  },
  e_title_1: {
    position: 'absolute',
    left: 220,
    top: 25,
    width: 50,
  },
  e_title_2: {
    position: 'absolute',
    left: 320,
    top: 100,
    width: 50,
  },
  e_title_3: {
    position: 'absolute',
    left: 320,
    top: 190,
    width: 50,
  },
  e_title_4: {
    position: 'absolute',
    left: 250,
    top: 260,
    width: 50,
  },
  e_title_5: {
    position: 'absolute',
    left: 125,
    top: 260,
    width: 50,
  },
  e_title_6: {
    position: 'absolute',
    left: 50,
    top: 190,
    width: 50,
  },
  e_title_7: {
    position: 'absolute',
    left: 50,
    top: 110,
    width: 50,
  },
  e_title_8: {
    position: 'absolute',
    left: 100,
    top: 20,
    width: 50,
  },
});

export default Matrix;