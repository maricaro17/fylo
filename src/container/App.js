import NavBar from "../component/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";
import ImgInicial from "../component/ImgInicial";
import Title from "../component/Title";
import CardList from "../component/CardList";
import TitleSet from "../component/TitleSet";
import ProfileList from "../component/ProfileList";
import Footer from "../component/Footer";
import Hp from "../component/Hp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImgInicial />
      <Title />
      <CardList />
      <TitleSet />
      <ProfileList />
      <Hp />
      <Footer />
    </div>
  );
}

export default App;
