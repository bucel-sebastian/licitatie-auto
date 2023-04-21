import Link from "next/link";

import Footer from "@/components/footer";
import CustomHead from "@/components/head";
import Header from "@/components/header";

import styles from "@/styles/page.module.css";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { apiHost } from "@/components/apiHost";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const [loginIsLoading, setLoginLoading] = useState(false);

  const handleLoginForm = async (event) => {
    event.preventDefault();

    setLoginLoading(true);

    let requestBody = new FormData();
    for (const p of new FormData(event.target)) {
      requestBody.append(p[0], p[1]);
      console.log(p[0], p[1]);
    }

    const response = await fetch(apiHost + "/client/login", {
      method: "POST",
      body: requestBody,
    });
    const data = await response.json();
    console.log(data);

    const responseBody = data.body;
    if (responseBody.status === 1) {
      Cookies.set("sessionToken", responseBody.sessionToken);
      if (responseBody.remember) {
        Cookies.set("sessionClientData", JSON.stringify(responseBody.userData));
        sessionStorage.setItem(
          "sessionClientData",
          JSON.stringify(responseBody.userData)
        );
      } else {
        Cookies.remove("sessionClientData");
        sessionStorage.setItem(
          "sessionClientData",
          JSON.stringify(responseBody.userData)
        );
      }

      if (sessionStorage.getItem("redirectUrl")) {
        router.push(sessionStorage.getItem("redirectUrl"));
      } else {
        router.push("/");
      }
    } else {
      // handle errors
    }
  };

  return (
    <>
      <CustomHead pageTitle={"Autentificare"}></CustomHead>

      <Header></Header>

      <div className="page_wrap">
        <div className="page_content">
          <div className={styles.login_form_container}>
            <h3 className={styles.login_form_heading}>Autentificare</h3>
            <form onSubmit={handleLoginForm}>
              <div>
                <div className={styles.input_container}>
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="username"
                    title="Introdu email-ul"
                    required
                  ></input>
                </div>
                <div className={styles.input_container}>
                  <label>Parola</label>
                  <input
                    type="password"
                    name="password"
                    title="Introdu parola"
                    required
                  ></input>
                  <Link
                    href="/account/lost-password"
                    className={styles.link_alt}
                  >
                    Am uitat parola
                  </Link>
                </div>
                <div className={styles.input_container}>
                  <label className={styles.input_checkbox}>
                    <input type="checkbox" name="remember"></input> Tine-mă
                    minte
                  </label>
                </div>
                <div className={styles.submit_container}>
                  {loginIsLoading ? (
                    <button type="submit" disabled>
                      Se incarca
                    </button>
                  ) : (
                    <button type="submit">Autentificare</button>
                  )}
                </div>
                <div>
                  <label>
                    Nu ai cont?&nbsp;
                    <Link href="/account/register" className={styles.link_alt}>
                      Înregistrează-te
                    </Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
