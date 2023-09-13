import NavBar from "./components/NavBar";
import WeatherPanel from "./components/WeatherPanel";
import "./assets/App.css"
const App = () => {
  return (
    <div className="App">
    <NavBar />
    <WeatherPanel />

    </div>
  )
}

export default App