import { configureStore } from '@reduxjs/toolkit';
import wordsReducer, { GET_CARDS, getCardsSaga } from './slices/wordsSlice';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { useDispatch } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(GET_CARDS, getCardsSaga);
}
export const store = configureStore({
  reducer: {
    words: wordsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(sagas);

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
