import axios from "axios";
import { create } from "zustand";
import { immer } from 'zustand/middleware/immer';

const baseUrl = 'https://skylake.mandarinshow.ru/api/surveys';

const state = (set) => ({
  questions: null,
  status: 'loading',
  result: null,

  setStatus: (status) => {
    set((state) => {
      state.status = status;
    });
  },
  sendResult: async (token, questions) => {
    try {
      state.status = 'loading';
      const { data } = await axios.post('https://skylake.mandarinshow.ru/api/survey/create', questions, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      state.result = data.data;
      state.status = 'success';
    } catch (e) {
      console.log(e);
      state.result = {
        "survey_id": 1,
        "survey": [
          {
            "id": 1,
            "category": {
              "name": 'Физическое'
            },
            "question": "string"
          }
        ],
        "value": 2
      };
      state.status = 'error';
    }
  },
  getQuestions: async (token) => {
    try {
      state.status = 'loading';
      const { data } = await axios.get(baseUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      set((state) => {
        state.questions = data.data;
        state.status = 'success';
      });
    } catch (e) {
      console.log(e);
      state.events = null;
      state.status = 'error';
    }
  }
});

const useQuestionStore = create(immer(state));
export default useQuestionStore;