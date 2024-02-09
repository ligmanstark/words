
import { GlobalStyles } from '../styled/GlobalStyles';
import { Footer } from '../Layout/Footer/Footer';
import { Header } from '../Layout/Header/Header';
import { Main } from '../Layout/Main/Main';
const Home = () => {
 
  return (
    <main>
      <GlobalStyles />
      <>
        <Header />
        <Main/>
        <Footer />
      </>
    </main>
  );
};
export default Home;
