import { onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { MainCom } from "./Component/Pages/MainCom";
import { auth } from "./Firebase";
import { setUser } from "./Component/Redux/Authentication/action";
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser));
      }else{
        dispatch(setUser(null));
      }
    })
  },[dispatch])

  return (
    <div>
        <MainCom />
    </div>
  );
}

export default App;
