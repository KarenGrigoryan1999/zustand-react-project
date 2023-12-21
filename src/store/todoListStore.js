import { create } from "zustand";
import { immer } from 'zustand/middleware/immer';

const state = (set) => ({
  listTtems: ['Первый элемент', 'Второй элемент', 'Третий элемент', 'Четвертый элемент'],

  addListItem: (item) =>
    set((state) => {
      state.listTtems.unshift(item);//unshift - добавляет элемент в начало массива
    }),

  removeListItem: (index) =>
    set((state) => {
      state.listTtems = state.listTtems.filter((_, idx) => idx !== index);
    }),
});

const useTodoListStore = create(immer(state));
export default useTodoListStore;