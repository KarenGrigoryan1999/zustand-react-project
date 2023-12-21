import { Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const defaultPicture = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const PictureCard = ({
  image,
  title,
  subTitle = '',
  onPress,
  activeOpacity = 0.8,
  height = 290,
  width = 190,
}) => {

  return (
    <TouchableOpacity style={{...styles.container, height, width}} onPress={onPress} activeOpacity={activeOpacity}>
      <ImageBackground source={image || defaultPicture} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 10}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  subTitle: {
    color: 'white',
    fontSize: 14,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius: 10,
  },
});

export default PictureCard;