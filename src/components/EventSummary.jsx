import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import SmallTitle from "./SmallTitle";
import CustomShadow from "./CustomShadow";
import StarIcon from "../icons/StarIcon";

const EventSummary = ({
  title,
  image,
  summary,
  date,
  category,
  onPress,
}) => {

  const normalDate = new Date(date);

  return (
    <CustomShadow style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.flexWrapper}>
          <Image style={styles.eventPicture} source={image} />
          <View style={styles.eventInfoWrapper}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.categoryBlock}>
                {category}
              </Text>
            </View>
            <SmallTitle>{title}</SmallTitle>  
          </View>
        </View>
        <Text style={styles.freeSlotsTitle}>Время встречи</Text>
        <View style={styles.flexWrapper}>
          <View style={styles.dateWrapper}>
            <Text style={styles.eventDate}>{normalDate.toDateString()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </CustomShadow>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 0,
    width: '100%',
    padding: 8,
    paddingTop: 16,
    paddingBottom: 16,
  },
  flexWrapper: {
    flexDirection: 'row',
    gap: 5,
  },
  verticalCenterWrapper: {
    alignItems: 'center',
  },
  eventPicture: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  eventSummary: {
    fontSize: 16,
    paddingBottom: 10,
    flex: 1,
  },
  eventDate: {
    backgroundColor: '#F1F1EF',
    padding: 5,
    borderRadius: 20,
    color: '#676767',
  },
  eventInfoWrapper: {
    padding: 10,
    flex: 1,
  },
  dateWrapper: {
    paddingTop: 10,
    flexDirection: 'row'
  },
  assessment: {
    fontSize: 16,
  },
  freeSlotsTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#676767',
  },
  categoryBlock: {
    backgroundColor: '#FFE32E',
    padding: 4,
    borderRadius: 20,
  }
});

export default EventSummary;