import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardState } from '../../types/types';
import { put } from 'redux-saga/effects';
import { db } from '../../../firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
const initialState: CardState = {
  cards: []
};
let response:any
export function* getCardsSaga(): any {
  const payload = yield getDocs(collection(db, 'words'));
  yield payload.forEach((doc:any) => {
       response = doc.data()
     console.log(response);
  });
  yield put(getCardsAction(response))
}

export const wordsSlice = createSlice({
  name: 'wordsSlice',
  initialState,
  reducers: {
    getCardsAction: (state: CardState, action:PayloadAction<[]>) => {
      state.cards = action.payload;
    }
  }
});

export const GET_CARDS = 'cards/getCards';
export const getCards = createAction(GET_CARDS);
export const { getCardsAction } = wordsSlice.actions;

export default wordsSlice.reducer;
