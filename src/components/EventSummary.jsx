import { View, Text, Image, StyleSheet } from "react-native";

import SmallTitle from "./SmallTitle";
import EventThemeBlock from "./EventThemeBlock";
import CustomShadow from "./CustomShadow";

const EventSummary = ({
  title,
  image,
  summary,
  date
}) => {

  return (
    <CustomShadow style={styles.container}>
      <Image style={styles.eventPicture} source={image} />
      <View style={styles.eventInfoWrapper}>
        <SmallTitle>{title}</SmallTitle>
        <Text style={styles.eventSummary}>{summary}</Text>
        <EventThemeBlock name={'Медитация'} bgColor={'#7ADB86'} />
        <View style={styles.dateWrapper}>
          <Text style={styles.eventDate}>{date}</Text>
        </View>
      </View>
    </CustomShadow>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 0,
    width: '100%',
  },
  eventPicture: {
    width: '100%',
    height: 200,
  },
  eventSummary: {
    paddingBottom: 10,
  },
  eventDate: {
    backgroundColor: '#C78179',
    padding: 5,
    borderRadius: 5,
    color: 'white',
  },
  eventInfoWrapper: {
    padding: 10,
  },
  dateWrapper: {
    paddingTop: 10,
    flexDirection: 'row'
  }
});

export default EventSummary;