import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import articlesSlice from './reducers/articlesReducer';
import filtersSlice from './reducers/filterReducer';

export const store = configureStore({
  reducer: {
      articles: articlesSlice,
      filters: filtersSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;