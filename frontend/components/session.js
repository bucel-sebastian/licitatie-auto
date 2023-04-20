import Cookies from "js-cookie";
import { apiHost } from "./apiHost";
import { useEffect, useState } from "react";

// avem sessionToken,
// daca remember = true avem sessionData-cookie si sessionData-sessionStorage,
// daca remember = false avem doar sessionData-sessionStorage

export default function getSession() {


    const [sessionData, setSessionData] = useState(null);
    const [sessionStatus, setSessionStatus] = useState(false);
    const [sessionToken, setSessionToken] = useState(null);
  

  
  useEffect(() => {

    const sessionTokenCheck = Cookies.get("sessionToken") ? Cookies.get("sessionToken") : null;
    const sessionDataCookieCheck = Cookies.get("sessionClientData") ? Cookies.get("sessionClientData") : null;
    const sessionDataCheck = sessionStorage.getItem("sessionClientData") ? sessionStorage.getItem("sessionClientData") : null;       

    if(sessionDataCheck !== null){
      const parsedSessionData = JSON.parse(sessionDataCheck);
      setSessionData(parsedSessionData);
      setSessionStatus(true);
      setSessionToken(sessionTokenCheck);
    } else if (sessionDataCookieCheck !== null) {
      const parsedSessionData = JSON.parse(sessionDataCookieCheck);
      const createDate = new Date(parsedSessionData.createDate);
      const difInMs = Date.now() - createDate.getTime();
      if(difInMs / 1000 >3600){
        checkSession(sessionTokenCheck).then((isValid) => {
          if(isValid){
            sessionStorage.setItem("sessionClientData",sessionDataCookieCheck);
            sessionData(parsedSessionData);
            setSessionStatus(true);
            setSessionToken(sessionTokenCheck);
          } else {
            clearSession();
          }
        });
      } else {
        sessionStorage.setItem("sessionClientData", sessionDataCookieCheck);
        setSessionData(parsedSessionData);
        setSessionStatus(true);
        setSessionToken(sessionTokenCheck);
      }
    } else{
      clearSession();
    }




//     if(sessionDataCheck !== null){
//       const parsedSessionData = JSON.parse(sessionDataCheck);
//       console.log(parsedSessionData);
//       const createDate = new Date(parsedSessionData.createDate);
//       const difInMs = Date.now() - createDate.getTime();
//       if(difInMs / 1000 > 3600){
//         checkSession(sessionTokenCheck).then((isValid) => {
//           if (isValid) {
//             setSessionData(parsedSessionData);
//             setSessionStatus(true);
//             setSessionToken(sessionTokenCheck);
//           } else {
//             clearSession();
//           }
//         });
//       } else {
//         setSessionData(parsedSessionData);
//             setSessionStatus(true);
//             setSessionToken(sessionTokenCheck);
//       }
//     } else if(sessionDataCookieCheck !== null){
//       const parsedSessionData = JSON.parse(sessionDataCookieCheck);
//       console.log(parsedSessionData);
//       const createDate = new Date(parsedSessionData.createDate);
//       const difInMs = Date.now() - createDate.getTime();
// if(difInMs / 1000 > 3600){
//   checkSession(sessionTokenCheck).then((isValid) =>{
//     if(isValid){
//       sessionStorage.setItem("sessionData",sessionDataCookieCheck);
//       setSessionData(parsedSessionData);
//             setSessionStatus(true);
//             setSessionToken(sessionTokenCheck);
//     }else{
//       clearSession();
//     }
//   });
// } else{
//   sessionStorage.setItem("sessionData",sessionDataCookieCheck);
//       setSessionData(parsedSessionData);
//             setSessionStatus(true);
//             setSessionToken(sessionTokenCheck);
// }
//     } else {
//       clearSession();
//     }
  }, []);

  function checkSession(token) {
    let requestBody = new FormData();
    requestBody.append("token",token);
    return fetch(`${apiHost}/session/validate`,{
      method: "POST",
      body: requestBody,
    }).then((response)=>response.json()).then((data)=>data.isValid);
  }

  function clearSession() {
    Cookies.remove("sessionToken");
    Cookies.remove("sessionClientData");
    sessionStorage.removeItem("sessionData");
    setSessionData(null);
    setSessionStatus(false);
    setSessionToken(null);
  }

  return {
    sessionData,
    sessionStatus,
    sessionToken,
    clearSession,
  };
}

// export const sessionData = sessionDataBE;
// export const sessionStatus = sessionStatusBE;
// export const sessionToken = sessionTokenBE;







// useEffect(() => {
//   const sessionTokenCheck = Cookies.get("sessionToken") || null;
//   const sessionDataCookieCheck = Cookies.get("sessionClientData") || null;
//   const sessionDataCheck = sessionStorage.getItem("sessionData") || null;       

//   if (sessionDataCheck !== null) {
//     // preluare date din sessionStorage
//     const parsedSessionData = JSON.parse(sessionDataCheck);
//     setSessionData(parsedSessionData);
//     setSessionStatus(true);
//     setSessionToken(sessionTokenCheck);
//   } else if (sessionDataCookieCheck !== null) {
//     // preluare date din cookie-uri
//     const parsedSessionData = JSON.parse(sessionDataCookieCheck);
//     const createDate = new Date(parsedSessionData.createDate);
//     const difInMs = Date.now() - createDate.getTime();
//     if (difInMs / 1000 > 3600) {
//       checkSession(sessionTokenCheck).then((isValid) =>{
//         if (isValid) {
//           sessionStorage.setItem("sessionData", sessionDataCookieCheck);
//           setSessionData(parsedSessionData);
//           setSessionStatus(true);
//           setSessionToken(sessionTokenCheck);
//         } else {
//           clearSession();
//         }
//       });
//     } else {
//       sessionStorage.setItem("sessionData", sessionDataCookieCheck);
//       setSessionData(parsedSessionData);
//       setSessionStatus(true);
//       setSessionToken(sessionTokenCheck);
//     }
//   } else {
//     clearSession();
//   }
// }, []); // observați că aici dependențele sunt goale pentru a declanșa efectul doar o singură dată
