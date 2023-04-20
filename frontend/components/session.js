import Cookies from "js-cookie";
import { apiHost } from "./apiHost";

function checkSession() {}

let sessionStatusBE = false,
  sessionDataBE = null;

if (sessionStorage.getItem("sessionClientData")) {
  sessionStatusBE = true;
  sessionDataBE = sessionStorage.getItem("sessionClientData");
  const createDate = new Date(sessionDataBE.createDate);
  const difInMs = Date.now() - createDate.getTime();
  if (Math.floor(difInMs / 1000) > 3600) {
    checkSession();
  }
} else {
  if (Cookies.get("sessionClientData")) {
    sessionDataBE = Cookies.get("sessionClientData");
    const createDate = new Date(sessionDataBE.createDate);
    const difInMs = Date.now() - createDate.getTime();
    if (Math.floor(difInMs / 1000) > 3600) {
      checkSession();
      sessionStorage.setItem("sessionClientData", sessionDataBE);
    } else {
      sessionStatusBE = true;
      sessionStorage.setItem("sessionClientData", sessionDataBE);
    }
  } else {
    if (Cookies.get("sessionToken")) {
    } else {
      sessionDataBE = null;
      sessionStatusBE = true;
    }
  }
}

export const sessionStatus = sessionStatusBE;
export const sessionData = sessionDataBE;
