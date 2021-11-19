import './App.css';
import './sb-admin-2.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Components/Navigation/Sidebar';
import TopNav from './Components/Navigation/TopNav';
import Footer from './Components/Navigation/Footer';
import Home from './Components/Home';
import Buttons from './Components/CustomComponents/Buttons';
import Cards from './Components/CustomComponents/Cards';
import Colors from './Components/Utilities/Colors';
import Borders from './Components/Utilities/Borders';
import Animation from './Components/CustomComponents/Animation';
import OtherUtilities from './Components/CustomComponents/OtherUtilities';

function App() {
  return (
    <div className="App">
      {/*  Page Wrapper  */}
      <div id="wrapper">
        <Sidebar />
        {/*  Content Wrapper  */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*  Main Content  */}
          <div id="content">
            <TopNav />  
            {/* <Home /> */}
            {/* <Buttons /> */}
            {/* <Cards/> */}
            {/* <Colors/> */}
            {/* <Borders/> */}
            {/* <Animation/> */}
            <OtherUtilities/>
          </div>
          {/*  End of Main Content  */}
          <Footer/>
        </div>
        {/*  End of Content Wrapper  */}
      </div>
      {/* End of Page Wrapper  */}
    </div >
  );
}

export default App;
