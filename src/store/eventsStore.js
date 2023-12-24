import axios from "axios";
import { create } from "zustand";
import { immer } from 'zustand/middleware/immer';

const baseUrl = 'https://skylake.mandarinshow.ru/api/events';

const state = (set) => ({
  events: null,
  status: 'loading',

  setStatus: (status) => {
    set((state) => {
      state.status = status;
    });
  },
  getEvents: async (searchText) => {
    try {
      state.status = 'loading';
      const { data } = await axios.get(`${baseUrl}/?search=${searchText}`);
      set((state) => {
        state.events = data.data;
        state.status = 'success';
      });
    } catch (e) {
      state.events = null;
      state.status = 'error';
    }
  }
});

const useEventsStore = create(immer(state));
export default useEventsStore;