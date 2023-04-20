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
      <CustomHead pageTitle={"Acasă"}></CustomHead>

      <Header></Header>

      <div className="page_wrap">
        <div className="page_content">
          <div>
            <form onSubmit={handleLoginForm}>
              <div>
                <div>
                  <label>E-mail</label>
                  <input type="email" name="username" required></input>
                </div>
                <div>
                  <label>Parola</label>
                  <input type="password" name="password" required></input>
                  <Link href="/account/lost-password">Am uitat parola</Link>
                </div>
                <div>
                  <label>
                    <input type="checkbox" name="remember"></input> Tine-mă
                    minte
                  </label>
                </div>
                <div>
                  {loginIsLoading ? (
                    <button type="submit" disabled>
                      Se incarca
                    </button>
                  ) : (
                    <button type="submit">Autentificare</button>
                  )}
                </div>
                <div>
                  <Link href="/account/register">
                    Nu ai cont? Înregistrează-te
                  </Link>
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
