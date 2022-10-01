import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { MainCom } from "./Component/Pages/MainCom";
import { setUser } from "./Component/Redux/Authentication/action";
import { auth } from "./Firebase";
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
