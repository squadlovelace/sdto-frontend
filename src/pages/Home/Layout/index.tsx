import Footer from '../../../components/Footer';
import { Header } from '../../../components/Header';
import HomeAbout from '../HomeAbout';
import HomeActions from '../HomeActions';
import HomeData from '../HomeData/HomeData';
import HomeFooter from '../HomeFooter';
import HomeTitle from '../HomeTitle';

export const Home = () => (
  <>
    <Header />
    <HomeTitle />
    <HomeData />
    <HomeActions />
    <HomeAbout />
    <HomeFooter />
    <Footer />
  </>
);

export default Home;
