import { createGlobalStyle } from "styled-components";
import ProfileScreen from "./screens/ProfileScreen";
import React, { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    height: 100vh;
    width: 100vw;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

function App() {
  const [nome, setNome] = useState("");
  const [bio, setBio] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [menu, setMenu] = useState("");

  return (
    <>
      <GlobalStyle />

      <ProfileScreen 
      nome={nome} 
      setNome={setNome} 

      bio={bio} 
      setBio={setBio}

      imageURL={imageURL}
      setImageURL={setImageURL}
      
      menu={menu}
      setMenu={setMenu}

      
      
      />

    </>
  );
}

export default App;
