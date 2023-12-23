import * as React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, ScrollView } from 'react-native';

import MainTitle from '../../../components/MainTitle';
import MiddleTitle from '../../../components/MiddleTitle';
import PictureCard from '../../../components/PictureCard';
import SearchInput from '../../../components/SearchInput';

export default function HomeScreen({ navigation }) {
  const carInfo = [{
    name: 'BMW',
    fullInfo: 'Немецкая машина с хорошим двигателем'
  },
  {
    name: 'Toyota',
    fullInfo: 'Японская надежность за не высокую цену'
  },
  {
    name: 'Lada',
    fullInfo: 'Не лучшая машина за высокую цену'
  }];

  const onGoToFullInfoScreen = (el) => () => {
    navigation.navigate('Extra', el);
  }

  return (
    <View style={styles.container}>
      <MainTitle>Перечень автомобилей</MainTitle>
      <ScrollView horizontal={true} contentContainerStyle={styles.choseBetweenTwoCarBlock}>
        <PictureCard
          image={require('../../../../assets/bmw.jpeg')}
          title={'Немецкие машины'}
          subTitle='Карточка с немецкими машинами'
        />
        <PictureCard
          image={require('../../../../assets/toyota.jpg')}
          title={'Японские машины'}
          subTitle='Карточка с японскими машинами'
        />
        <PictureCard
          image={require('../../../../assets/lada.jpg')}
          title={'Отечественный автопром'}
          subTitle='Карточка с всяким борохлом'
        />
      </ScrollView>
      <MiddleTitle>Краткий список автомобилей</MiddleTitle>
      <Text>Кликните на любой элемент из списка:</Text>
      {
        carInfo.map((el, idx) => (
          <TouchableHighlight onPress={onGoToFullInfoScreen(el)}>
            <Text key={idx} style={{ height: 30 }}>{el.name}</Text>
          </TouchableHighlight>
        ))
      }
      <SearchInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  choseBetweenTwoCarBlock: {
    flexDirection: 'row',
    gap: 5,
  }
})