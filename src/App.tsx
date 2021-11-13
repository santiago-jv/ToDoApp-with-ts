import { Fragment } from "react";
import Header from "./components/header/Header";
import ContextProvider from "./context/AppContext";
import MainContent from "./layout/mainContent/MainContent";


export default function App () {
  return (
    <>
    <ContextProvider>
     
      <Header/>
      <MainContent/>
     
    </ContextProvider>
    </>
  );
}
