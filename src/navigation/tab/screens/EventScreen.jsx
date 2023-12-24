import { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, ActivityIndicator } from 'react-native';

import MainTitle from '../../../components/MainTitle';
import SmallTitle from '../../../components/SmallTitle';
import EventSummary from '../../../components/EventSummary';
import Matrix from '../../../components/Matrix';
import useEventsStore from '../../../store/eventsStore';
import SearchInput from '../../../components/SearchInput';


export default function EventScreen({navigation}) {
  const status = useEventsStore(state => state.status);
  const getEvents = useEventsStore(state => state.getEvents);
  const events = useEventsStore(state => state.events);

  const [textFieldChanging, setTextFieldChanging] = useState(false);

  useEffect(() => {
    getEvents();
  }, []);

  const onSearchTextSubmit = useCallback((text) => {
    getEvents(text);
    setTextFieldChanging(false);
  }, []);

  const onSearchTextChange = useCallback((text) => {
    setTextFieldChanging(true);
  }, []);

  if (status === 'loading') {
    return (
      <View style={styles.loadingElement}>
        <ActivityIndicator size={50} color={'black'} />
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View style={styles.loadingElement}>
        <MainTitle>Упс...</MainTitle>
        <SmallTitle>Кажется произошла ошибка</SmallTitle>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MainTitle>Рекомендации</MainTitle>
      <SearchInput onChange={onSearchTextChange} onSubmit={onSearchTextSubmit} />
      {textFieldChanging && <View style={{paddingTop: 50}}><ActivityIndicator size={50} color={'black'} /></View>}
      <ScrollView style={{ height: '100%', marginTop: 10 }}>
        {(!events || events.length === 0) && <MiddleTitle>Ничего не найдено :(</MiddleTitle>}
        {
          !textFieldChanging && events.map(event => (
            <EventSummary
              key={event.id}
              title={event.title}
              summary={event.description}
              category={event.category.name}
              image={{uri: event.main_image}}
              date={event.date}
              onPress={() => navigation.navigate('FullEvent', event)}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#fff',
  },
  loadingElement: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})