import { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import StarIcon from '../../../icons/StarIcon'

//для typeState main | subscribtionEvent | finishEvent
export default function FullEventInfoScreen({ typeState }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [openListQuestionsMember, setOpenListQuestionsMember] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapperImage}>
          <Image
            style={styles.imageStyleEvent}
            source={require('../../../../assets/meditation.png')}
          />
          <View style={styles.wrapperHeader}>
            <Image
              source={require('../../../../assets/arrow-downarrow.png')}
            />
            <Text style={{ color: 'white' }}>Мероприятие</Text>
            <View />
          </View>
        </View>
        <Text style={styles.categoryEvent}>Здоровье</Text>
        <View style={{ paddingRight: 20, paddingLeft: 20, paddingBottom: 60 }}>
          <Text style={styles.titleEvent}>Групповая медитация для начинающих</Text>
          <Text style={styles.authorEvent}>Зоя Ивановна</Text>
          <View style={styles.wrapperData}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.mapPointStyle}
                source={require('../../../../assets/mapPoint.png')}
              />
              <Text style={{ fontSize: 18 }}>Онлайн</Text>
            </View>
            <Text style={{ color: '#8A8A8A' }}>Будет ссылка</Text>
          </View>
          <View style={styles.wrapperData}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.mapPointStyle}
                source={require('../../../../assets/time.png')}
              />
              <Text style={{ fontSize: 18 }}>24.12.2024 12.30</Text>
            </View>
            <Text style={{ color: '#D9BC01', fontSize: 18 }}>2 ч</Text>
          </View>
          <View style={styles.borderLine}>
            <Text style={styles.titleDescriptionText}>Описание</Text>
            <Text style={styles.descriptionText}>
              На лекции будет особое внимание уделено стратегиям профилактики выгорания, а также методам преодоления этого состояния. Вы узнаете о важности управления стрессом, поддержке психического здоровья и развитии навыков эмоциональной стойкости для предотвращения выгорания как в личной, так и в профессиональной жизни.
            </Text>
          </View>
          <View style={styles.borderLine}>
            <Text style={styles.titleDescriptionText}>Материалы</Text>
            <View style={styles.wrapperMaterial}>
              <Text>Ссылка на книгу</Text>
              <Text style={{ color: '#D9BC01' }}>http://www.codehow.com</Text>
            </View>
            <View style={styles.wrapperMaterial}>
              <Text>Файл</Text>
              <Text style={{ color: '#D9BC01' }}>Материалы_подготовка.pdf</Text>
            </View>
          </View>
          <Text style={styles.titleDescriptionText}>Число участников</Text>
          {typeState === 'main' &&
            <>
              <Text style={{ color: '#858585', paddingBottom: 20 }}>10/30</Text>
              <CustomButton
                title='Записаться'
                textColor='#000'
                color='#FFDD00'
                style={{ marginBottom: 10 }}
              />
            </>
          }
          {typeState === 'subscribtionEvent' &&
            <>
              <Text style={{ color: '#858585', paddingBottom: 20 }}>10/30</Text>
              <CustomButton
                title='Задать вопрос'
                textColor='#000'
                color='#FFDD00'
                onPress={() => setModalVisible(!modalVisible)}
              />
              <View style={{ marginBottom: 10 }} />
              <CustomButton
                title='Отменить запись'
                textColor='#000'
                color='#EFEFEF'
                style={{ marginBottom: 10 }}
              />
            </>
          }
          {typeState === 'finishEvent' &&
          <>
            <Text style={{ color: '#858585', paddingBottom: 20 }}>10</Text>
            <TouchableOpacity onPress={() => setOpenListQuestionsMember(!openListQuestionsMember)}>
              <View style={styles.questionMember}>
                <View style={{ flexDirection: 'row' }}>
                  <Text>Вопросы участников</Text>
                  <Text style={{ color: '#D9BC01' }}> (2)</Text>
                </View>
                <Image
                  source={require('../../../../assets/arrowBottom.png')}
                />
              </View>
            </TouchableOpacity>
            {openListQuestionsMember &&
              <>
                <View style={{marginBottom: 10}}>
                  <View style={styles.quetionsMember}>
                    <View style={{ flexDirection: 'column', marginRight: 10 }}>
                      <Text>Как повлияет практика на мое самочувствие?</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Text>Нравится</Text>
                        <Text style={{ color: '#F8BD00' }}> 2</Text>
                      </View>
                    </View>
                    <Image
                      source={require('../../../../assets/HeartIcon1.png')}
                    />
                  </View>
                </View>
                <View style={{marginBottom: 10}}>
                  <View style={styles.quetionsMember}>
                    <View style={{ flexDirection: 'column', marginRight: 10 }}>
                      <Text>Я точно выиграю в этом хакатоне?</Text>
                      <View style={{ flexDirection: 'row' }}>
                        <Text>Нравится</Text>
                        <Text style={{ color: '#F8BD00' }}> 999999</Text>
                      </View>
                    </View>
                    <Image
                      source={require('../../../../assets/HeartIcon2.png')}
                    />
                  </View>
                </View>
              </>
            }
            <CustomButton
              title='Оценить'
              textColor='#000'
              color='#FFDD00'
              style={{ marginBottom: 10 }}
              onPress={() => setModalVisible(!modalVisible)}
            />
            <View style={styles.finishEvent}>
              <Image
                style={{ marginRight: 20 }}
                source={require('../../../../assets/linkRecord.png')}
              />
              <Text style={{ textDecorationLine: 'underline' }}>Посмотреть запись</Text>
            </View>
          </>
          }
        </View>
        {modalVisible &&
          <View style={styles.wrapperModal}>
            <View style={styles.shadow}></View>
            <View style={styles.modalWindow}>
              <View style={styles.wrapperImageClose}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    source={require('../../../../assets/closeIcons.png')}
                  />
                </TouchableOpacity>
              </View>
              {typeState == 'finishEvent' &&
                <>
                  <Text style={styles.modalTitle}>Оцените качество мероприятия</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingTop: 20,
                    }}>
                    <StarIcon width={57} height={57} />
                    <StarIcon width={57} height={57} />
                    <StarIcon width={57} height={57} />
                    <StarIcon width={57} height={57} />
                    <StarIcon width={57} height={57} />
                  </View>
                  <Text style={styles.titleDescriptionText}>Комментарий</Text>
                  <TextInput
                    placeholder='Комментарий'
                    style={styles.commentInput}
                    multiline={true}
                  />
                  <View style={{ padding: 10 }}></View>
                  <CustomButton
                    title='Оценить мероприятие'
                    textColor='#000'
                    color='#FFDD00'
                  />
                </>
              }
              {typeState === 'subscribtionEvent' &&
                <>
                  <Text style={styles.modalTitle}>Вопрос к мероприятию</Text>
                  <View style={{ padding: 15 }}></View>
                  <TextInput
                    placeholder='Вопрос'
                    style={styles.commentInput}
                    multiline={true}
                  />
                  <View style={{ flex: 1, paddingBottom: 80, justifyContent: 'flex-end' }}>
                    <CustomButton
                      title='Оценить мероприятие'
                      textColor='#000'
                      color='#FFDD00'
                    />
                  </View>
                </>
              }
            </View>
          </View>
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    position: 'relative',
  },
  wrapperImage: {
    position: 'relative',
  },
  wrapperHeader: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#D9BC01',
    position: 'absolute',
    justifyContent: 'space-between',
    padding: 5,
  },
  titleEvent: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
  },
  imageStyleEvent: {
    width: '100%',
    maxHeight: 235,
  },
  categoryEvent: {
    backgroundColor: '#FFE32E',
    borderRadius: 18,
    position: 'absolute',
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 6,
    paddingRight: 6,
    top: 222,
    left: 20,
    fontWeight: '600',
  },
  authorEvent: {
    color: '#D9BC01',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    fontSize: 18,
    paddingBottom: 20,
  },
  wrapperData: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBlockColor: '#e0e0e0be',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },
  mapPointStyle: {
    marginRight: 10,
  },
  titleDescriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 16,
  },
  descriptionText: {
    color: '#747474',
    fontSize: 14,
    paddingBottom: 20,
  },
  borderLine: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBlockColor: '#e0e0e0be',
  },
  wrapperMaterial: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  finishEvent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  questionMember: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 10,
    shadowColor: "#00000033",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  wrapperModal: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#00000041',
  },
  modalWindow: {
    flex: 0.7,
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  shadow: {
    flex: 1,
  },
  wrapperImageClose: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  commentInput: {
    backgroundColor: '#F1F1F1',
    height: 100,
    padding: 10,
    borderRadius: 25,
  },
  quetionsMember: {
    backgroundColor: '#EFEFEF',
    borderRadius: 25,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})