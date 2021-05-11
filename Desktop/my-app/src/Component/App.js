import Indiperson from "./Indiperson"
import { useEffect} from "react";
const App = () => {
    useEffect(async() => {
        const data = await fetch("https://reqres.in/api/users?page=2");
        const jsonData = await data.json();
        console.log(jsonData);
      })
    return(
        <div>
            <Indiperson email="dhruvin@gmail.com" name="Dhruvin" />
            <Indiperson email="dhruvin@gmail.com" name="Dhruvin1" />
            <Indiperson email="dhruvin@gmail.com" name="Dhruvin2" />
            <Indiperson email="dhruvin@gmail.com" name="Dhruvin3" />
            <Indiperson email="dhruvin@gmail.com" name="Dhruvin4" />
      </div>
      );
  };
  export default App;