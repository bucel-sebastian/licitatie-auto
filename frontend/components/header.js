import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/header.module.css";
import { apiHost } from "./apiHost";
import { useEffect, useState } from "react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(
    async () => {
      const response = await fetch(apiHost + "/client/session");
      const data = await response.json();
      if(data.status === 200){
        const responseBody = data.body;
        if(responseBody.sessionStatus === 1){
          se11tIsLoggedIn(true);
        }
      }
    }
  )

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
                {isLoggedIn ? (
                  <button
                    id="login_button"
                    className={styles.login_button}
                    // href="/account/login"
                    onClick={openAccountMenu}
                  >
                    Contul meu
                  </button>
                ) : (
                  <Link
                    id="login_button"
                    className={styles.login_button}
                    href="/account/login"
                    onClick={saveRedirectUrl}
                  >
                    Autentificare
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
