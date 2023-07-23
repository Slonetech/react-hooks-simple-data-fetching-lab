// create your App component here
import { useEffect,useState } from "react"
function App() {
    const [dogImg,setDogImg] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => setDogImg(data.message))
        .catch((err) => console.log(err))
    },[])

    if (!dogImg) return <p>Loading...</p>;

  return (
    <div>
        <img src={dogImg} alt="A Random Dog" />

    </div>
  )
}

export default App
