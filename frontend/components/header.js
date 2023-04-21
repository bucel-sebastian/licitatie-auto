import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/header.module.css";
import { apiHost } from "./apiHost";
import { useEffect, useState } from "react";
import getSession from "./session";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { sessionData, sessionStatus, sessionToken, clearSession } =
    getSession();

  useEffect(() => {
    if (sessionStatus) {
      setIsLoggedIn(true);
    }
  });

  const openAccountMenu = (event) => {};

  const router = useRouter();

  const searchHandler = (event) => {
    event.preventDefault();

    router.push({
      pathname: "/search",
      query: {
        query: event.target.header_search_bar_input.value,
      },
    });
  };

  const saveRedirectUrl = (event) => {
    if (router.asPath === "/account/login") {
      sessionStorage.setItem("redirectUrl", "/");
    } else {
      sessionStorage.setItem("redirectUrl", router.asPath);
    }
  };

  const showSearchRecomandations = (event) => {
    event.preventDefault();
  };

  return (
    <header id={styles.header}>
      <div className={styles.header_wrap}>
        <div className={styles.header_left_wrap}>
          <Link href="/" className={styles.header_logo}>
            <img src="/next.svg" alt="LOGO"></img>
          </Link>
        </div>
        <div className={styles.header_center_wrap}>
          <form
            id="header_search_bar_form"
            className={styles.header_search_bar_form}
            onSubmit={searchHandler}
          >
            <input
              type="text"
              className={styles.header_search_bar_input}
              id="header_search_bar_input"
              placeholder="Caută"
              name="header_search_bar_input"
              required
              onInput={showSearchRecomandations}
            ></input>
            <button
              type="submit"
              className={styles.header_search_bar_submit}
              id="header_search_bar_submit"
            >
              x
            </button>
          </form>
        </div>
        <div className={styles.header_right_wrap}>
          <nav className={styles.navbar}>
            <ul className={styles.navbar_list}>
              <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/">
                  Licitații
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/sell">
                  Vinde o mașină
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link className={styles.nav_link} href="/about">
                  Cine suntem?
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link
                  id="login_button"
                  className={styles.login_button}
                  // href="/account/login"
                  href={isLoggedIn ? "" : "/account/login"}
                  onClick={isLoggedIn ? openAccountMenu : saveRedirectUrl}
                >
                  {isLoggedIn ? "Contul meu" : "Autentificare"}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
