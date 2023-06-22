// import "./views/App.css";

// import Footer from '../../components/Footer/Footer';
// import LeftList from '../../components/LeftList';
import Navigations from '../../components/Navigations';

function DefaultLayout({ children }) {
  return (
    <div className="App">
      <Navigations/>
      {/* <LeftList/> */}
      {/* <Main /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default DefaultLayout;
