'use client';
import { useEffect } from 'react';
 
import {  useStoreDispatch } from '../../store/store';
import { getCards } from '../../store/slices/wordsSlice';
export const Main = () => {
  const dispatch = useStoreDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);
  return (
        <>
         <button>Click</button>
       </>
   );
};
 