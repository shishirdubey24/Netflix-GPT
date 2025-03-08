import { useSelector } from "react-redux"

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovie)
    console.log(movies);
  return (
    <div>
       <h1>Main COntainer</h1>
    </div>
  )
}

export default MainContainer
