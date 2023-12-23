import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MainTitle from '../../../components/MainTitle';
import EventSummary from '../../../components/EventSummary';
import Matrix from '../../../components/Matrix';

export default function EventScreen() {
  return (
    <View style={styles.container}>
      <MainTitle>События</MainTitle>
      <ScrollView style={{ height: '100%' }}>
        <Matrix elements={[
          {
            name: '1',
            val: 1,
          },
          {
            name: '2',
            val: 2,
          },
          {
            name: '3',
            val: 3,
          },
          {
            name: '4',
            val: 4,
          },
          {
            name: '5',
            val: 5,
          },
          {
            name: '6',
            val: 6,
          },
          {
            name: '7',
            val: 7,
          },
          {
            name: '8',
            val: 8,
          },
        ]} />
        <EventSummary
          title={'Тестовое'}
          summary={'Тестовое описание события любителей BMW'}
          image={require('../../../../assets/bmw.jpeg')}
          date={'ПН 11:30'}
        />
        <EventSummary
          title={'Тестовое'}
          summary={'Тестовое описание события любителей BMW'}
          image={require('../../../../assets/toyota.jpg')}
          date={'ПН 11:30'}
        />
        <EventSummary
          title={'Тестовое'}
          summary={'Тестовое описание события любителей BMW'}
          image={require('../../../../assets/lada.jpg')}
          date={'ПН 11:30'}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
  }
})