'use client';
import { useEffect } from 'react';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { RootState, useStoreDispatch } from '../store/store';
import { getCards } from '../store/slices/wordsSlice';
const Home = () => {
  const dispatch = useStoreDispatch();
  // let x = [];
  // const fetchCards = async () => {
  //   const querySnapshot = await getDocs(collection(db, 'words'));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //     x.push(doc.data());
  //     console.log(x);
  //   });
  // };
  useEffect(() => {
    dispatch(getCards());
  }, []);
  return (
    <main>
      <GlobalStyles />
      <>
        <Header />
        <button>Click</button>
        <Footer />
      </>
    </main>
  );
};
export default Home;
