import { create } from "zustand";
import { immer } from 'zustand/middleware/immer';

const state = (set) => ({
    events: [
        { id: 1, title: 'Первое событие', description: 'Описание события 1', image: 'image.png' },
        { id: 2, title: 'Второе событие', description: 'Описание события 2', image: 'image2.png' },
        { id: 3, title: 'Третее событие', description: 'Описание события 3', image: 'image3.png' },
    ],

    searchEvent: (itemTitle) =>
        set((state) => {
            
    }),
});

const useSearchStore = create(immer(state));
export default useSearchStore;