import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '@/store/pages';
import skillReducer from '@/store/skills';

export const store = configureStore({
    reducer: {
        pages: pageReducer,
        skills: skillReducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
