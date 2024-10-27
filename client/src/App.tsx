import React from 'react';
import "./App.css"
import { Container, Content } from './module';
import { LoginPage } from './module/AuthentificationModule';
import { Routes, Route, useNavigate } from "react-router-dom";
import { readExistingExpCookie } from './module/APIs/cookie';



function App(): JSX.Element {
  const navigate = useNavigate();

  React.useEffect(() => {
    existAndValidCookie();
    async function existAndValidCookie() {
      const cookieIsValid = await readExistingExpCookie();   
      if (cookieIsValid && cookieIsValid.isValid) { 
        navigate("/Content");
      } else {
        navigate("/LoginPage");
      };
    };
  }, []);


  return (
    <div className="w-full flex items-center justify-center h-auto">
      <Container>
        <Routes>
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Content/*" element={<Content />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
