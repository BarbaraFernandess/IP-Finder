import { useState, useCallback } from "react";
import Header from "./components/Header";
import { ResultH1, ContainerAll } from "./components/Results/index.styled";
import GlobalStyle from "./globalStyles";
import axiosInstance from "./axios-instance";

 
function App() {
  const [infoApi, setInfoApi] = useState();
  const [inputUser, setInputUser] = useState("");
  const [erro, setErro] = useState(false);

  const handleClick = useCallback(async () => {

    if(inputUser.length){
      axiosInstance.get(`${inputUser}`).then((res) =>{
        setInfoApi(res.data);
        setErro(res.data.status === "fail");
        setInputUser("");
      }).catch((error) =>{
        console.log(error);
      })
    } 
  },[inputUser]);



  return (
    <div className="App">
      <GlobalStyle />
      <Header 
        inputUser={inputUser}
        setInputUser={setInputUser}
        handleClick={handleClick}
      />
      {erro?(
        <ContainerAll>
          <ResultH1>O IP que você está procurando não foi encontrado!</ResultH1>
        </ContainerAll>
      ): null}
      {infoApi?.city ? (
        <>
          <ContainerAll>
            <ResultH1>Country: {infoApi.country}</ResultH1>
            <ResultH1>City: {infoApi.city}</ResultH1>
            <ResultH1>Region name: {infoApi.regionName}</ResultH1>
            <ResultH1>Timezone: {infoApi.timezone}</ResultH1>
          </ContainerAll>
        </>
      ) : null}   
    </div>
  );
}
export default App;
