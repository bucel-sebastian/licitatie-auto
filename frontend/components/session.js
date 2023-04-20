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
  

  function checkSession(token) {
    return true;
  }
  useEffect(() => {
    let sessionTokenCheck = Cookies.get("sessionToken")
      ? Cookies.get("sessionToken")
      : null;
    let sessionDataCookieCheck = Cookies.get("sessionClientData")
      ? Cookies.get("sessionClientData")
      : null;
    let sessionDataCheck = sessionStorage.getItem("sessionData")
      ? sessionStorage.getItem("sessionData")
      : null;
  }, []);

  console.log(sessionDataCheck);
  sessionDataCookieCheck;
  let sessionDataBE = null,
    sessionStatusBE = false,
    sessionTokenBE = null;

  if (sessionDataCheck !== null) {
    let createDate = new Date(sessionData.createDate);
    let difInMs = Date.now() - createDate.getTime();
    if (difInMs / 1000 > 3600) {
      let checkSession = checkSession(sessionTokenCheck);
      if (checkSession) {
        sessionDataBE = sessionDataCheck;
        sessionStatusBE = true;
        sessionTokenBE = sessionTokenCheck;
      } else {
        sessionDataBE = null;
        sessionStatusBE = false;
        sessionTokenBE = null;
      }
    }
  } else {
    if (sessionDataCookieCheck !== null) {
      let createDate = new Date(sessionDataCookieCheck.createDate);
      let difInMs = Date.now() - createDate.getTime();
      if (difInMs / 1000 > 3600) {
        let checkSession = checkSession(sessionTokenCheck);
        if (checkSession) {
          sessionStorage.setItem("sessionData", sessionDataCookieCheck);
          sessionDataBE = sessionDataCheck;
          sessionStatusBE = true;
          sessionTokenBE = sessionTokenCheck;
        } else {
          sessionDataBE = null;
          sessionStatusBE = false;
          sessionTokenBE = null;
        }
      }
    } else {
      sessionDataBE = null;
      sessionStatusBE = false;
      sessionTokenBE = null;
    }
  }

  const sessionData = sessionDataBE;
  const sessionStatus = sessionStatusBE;
  const sessionToken = sessionTokenBE;

  return {
    sessionData,
    sessionStatus,
    sessionToken,
  };
}

// export const sessionData = sessionDataBE;
// export const sessionStatus = sessionStatusBE;
// export const sessionToken = sessionTokenBE;







import Cookies from "js-cookie";
import { apiHost } from "./apiHost";
import { useEffect, useState } from "react";

export default function getSession() {
  
    
  useEffect(() => {
    const sessionTokenCheck = Cookies.get("sessionToken") || null;
    const sessionDataCookieCheck = Cookies.get("sessionClientData") || null;
    const sessionDataCheck = sessionStorage.getItem("sessionData") || null;

    if (sessionDataCheck !== null) {
      const parsedSessionData = JSON.parse(sessionDataCheck);
      const createDate = new Date(parsedSessionData.createDate);
      const difInMs = Date.now() - createDate.getTime();
      if (difInMs / 1000 > 3600) {
        checkSession(sessionTokenCheck).then((isValid) => {
          if (isValid) {
            setSessionData(parsedSessionData);
            setSessionStatus(true);
            setSessionToken(sessionTokenCheck);
          } else {
            clearSession();
          }
        });
      } else {
        setSessionData(parsedSessionData);
        setSessionStatus(true);
        setSessionToken(sessionTokenCheck);
      }
    } else if (sessionDataCookieCheck !== null) {
      const parsedSessionData = JSON.parse(sessionDataCookieCheck);
      const createDate = new Date(parsedSessionData.createDate);
      const difInMs = Date.now() - createDate.getTime();
      if (difInMs / 1000 > 3600) {
        checkSession(sessionTokenCheck).then((isValid) => {
          if (isValid) {
            sessionStorage.setItem("sessionData", sessionDataCookieCheck);
            setSessionData(parsedSessionData);
            setSessionStatus(true);
            setSessionToken(sessionTokenCheck);
          } else {
            clearSession();
          }
        });
      } else {
        sessionStorage.setItem("sessionData", sessionDataCookieCheck);
        setSessionData(parsedSessionData);
        setSessionStatus(true);
        setSessionToken(sessionTokenCheck);
      }
    } else {
      clearSession();
    }
  }, []);

  function checkSession(token) {
    return fetch(`${apiHost}/session/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then((data) => data.isValid);
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
