import { useState, useMemo, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import Matrix from '../../../components/Matrix';
import CustomShadow from '../../../components/CustomShadow';

export default function TestScreen() {

  const chapters = [
    {
      name: 'Физическое',
      val: 1
    },
    {
      name: 'Эмоциональное',
      val: 3
    },
    {
      name: 'Финансовое',
      val: 2
    },
    {
      name: 'Социальное',
      val: 1
    },
    {
      name: 'Профессиональное',
      val: 3
    },
    {
      name: 'Предназначение',
      val: 2
    },
    {
      name: 'Интеллектуальное',
      val: 1
    },
    {
      name: 'Окружающая среда',
      val: 2
    },
  ];

  return (
    <View style={styles.container}>
      <Matrix elements={chapters} />
      <ScrollView style={{ margin: 20 }}>
        {chapters.map(el => (<CustomShadow style={styles.chapterContainer}>
          <Text style={styles.matrixResult}>{el.val}/5</Text>
          <Text style={styles.matrixChapter}>{el.name}</Text>
        </CustomShadow>))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  matrixResult: {
    fontWeight: '800',
    fontSize: 20,
    marginRight: 20,
  },
  matrixChapter: {
    fontSize: 20
  },
  chapterContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 29,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  }
})