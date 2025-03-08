
import useNowPlaying from "../Hooks/useNowPlaying"
import Header from "./Header"
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  useNowPlaying();
  return (
    <div>
    <Header/>
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
}

export default Browse;
