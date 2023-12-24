import { useState, useMemo, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import CustomShadow from '../../../components/CustomShadow';
import useAuthStore from '../../../store/authStore';
import useQuestionStore from '../../../store/useQuestionsStore';

export default function TestScreen({navigation}) {
  const token = useAuthStore(state => state.token);
  const status = useQuestionStore(state => state.status);
  const result = useQuestionStore(state => state.result);
  const loadedQuestions = useQuestionStore(state => state.questions);
  const getQuestuins = useQuestionStore(state => state.getQuestions);
  const sendResult = useQuestionStore(state => state.sendResult);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestuins(token);
  }, []);

  useEffect(() => {
    if(loadedQuestions && loadedQuestions.length != 0) setQuestions(loadedQuestions.map((el, idx) => ({survey_id: el.id, title: el.question, value: null})));
  }, [loadedQuestions]);

  const answers = [1, 2, 3, 4, 5];

  const [currentElementIndex, setCurrentElementIndex] = useState(0);

  const currentElement = useMemo(() => questions.find((el, idx) => idx === currentElementIndex), [currentElementIndex, questions]);

  const swithQuestion = () => {
    if (questions.length - 1 !== currentElementIndex) {
      setCurrentElementIndex(prev => prev + 1)
    }
  };

  const swithQuestionEnd = () => {
    if (questions.length - 1 === currentElementIndex) {
      setCurrentElementIndex(prev => prev - 1)
    }
  };

  const getRezultTest = async () => {
    await sendResult(token, questions);
    //navigation.navigate('Extra');
  };

  const selectAnswer = (ans) => () => {
    setQuestions(prev => prev.map((el, idx) => idx === currentElementIndex ? { ...el, value: ans } : el));
  }

  if(status === 'loading' || !currentElement) {
    return <View style={{flex: 1, height: '100%', alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator size={50} color={'black'} /></View>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.customTitle}>{currentElement.title}</Text>
      <View style={styles.possibleAnswers}>
        {answers.map((answer) => (
          <CustomShadow style={{marginRight: 5}} key={answer}>
            <TouchableOpacity onPress={selectAnswer(answer)}>
              <View style={{ ...styles.answer, borderColor: answer === currentElement.value ? '#FFDD00' : 'transparent', borderWidth: 3 }}>
                <Text style={styles.textAnswer}>{answer}</Text>
              </View>
            </TouchableOpacity>
          </CustomShadow>
        ))}
      </View>
      <View style={styles.containerPage}>
        <Text style={styles.pageText}>{currentElement.survey_id}/{questions.length}</Text>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          <CustomButton title={'Назад'} onPress={swithQuestionEnd} color={'#E2E2E2'}></CustomButton>
          {questions.length - 1 === currentElementIndex ?
            <CustomButton title={'Конец'} onPress={getRezultTest} color={'#000000'}></CustomButton>
            :
            <CustomButton title={'Далее'} onPress={swithQuestion} color={'#000000'}></CustomButton>
          }
        </View>
      </View>
      <View style={{flex: 0.6}}></View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#FFFFFF',
  },
  customTitle: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  possibleAnswers: {
    flex: 2,
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
  },
  answer: {
    backgroundColor: 'white',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
  },
  textAnswer: {
    fontSize: 25,
    fontWeight: '900',
  },
  containerPage: {
    flex: 2,
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  pageText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSwitch: {
    backgroundColor: '#b2b2b2',
  }
})