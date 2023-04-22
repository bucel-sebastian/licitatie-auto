import { useEffect, useState } from "react";
import GetSession from "./session";
import styles from "@/styles/header.module.css";
import { apiHost } from "./apiHost";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AccountButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { sessionData, sessionStatus, sessionToken, clearSession } =
    GetSession();
  useEffect(() => {
    if (sessionStatus) {
      setIsLoggedIn(true);
      console.log(sessionData);
    }
  });

  const openAccountMenu = (event) => {
    document
      .getElementById("account_dropdown_menu")
      .classList.remove(styles.hidden);
  };

  const closeAccountMenu = (event) => {
    document
      .getElementById("account_dropdown_menu")
      .classList.add(styles.hidden);
  };

  const saveRedirectUrl = (event) => {
    if (router.asPath === "/account/login") {
      sessionStorage.setItem("redirectUrl", "/");
    } else {
      sessionStorage.setItem("redirectUrl", router.asPath);
    }
  };

  if (isLoggedIn) {
    return (
      <div
        onMouseEnter={openAccountMenu}
        onMouseLeave={closeAccountMenu}
        className={styles.account_button_container}
      >
        <Link id="login_button" className={styles.login_button} href="#">
          Contul meu
        </Link>
        <div
          id="account_dropdown_menu"
          className={`${styles.account_dropdown_menu} ${styles.hidden}`}
        >
          <ul>
            <li className={styles.dropdown_nav_greetings}>
              <h4>Salut, {sessionData.firstName}</h4>
            </li>
            <li className={styles.dropdown_nav_item}>
              <Link
                className={styles.dropdown_nav_link}
                href="/account/profile"
              >
                Profil
              </Link>
            </li>
            <li className={styles.dropdown_nav_item}>
              <Link
                className={styles.dropdown_nav_link}
                href="/account/profile/favorites"
              >
                Favorite
              </Link>
            </li>
            <li className={styles.dropdown_nav_item}>
              <Link
                className={styles.dropdown_nav_link}
                href="/account/profile/auctions"
              >
                Mașinile mele
              </Link>
            </li>
            <li className={styles.dropdown_nav_item}>
              <Link href="#" className={styles.dropdown_nav_link}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (!isLoggedIn) {
    return (
      <Link
        id="login_button"
        className={styles.login_button}
        href="/account/login"
        onClick={saveRedirectUrl}
      >
        Autentificare
      </Link>
    );
  }

  return <button id="login_button" className={styles.login_button}></button>;
}
