import Link from "next/link";

import Footer from "@/components/footer";
import CustomHead from "@/components/head";
import Header from "@/components/header";

import styles from "@/styles/page.module.css";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { apiHost } from "@/components/apiHost";

export default function Login() {
  const router = useRouter();
  const [loginIsLoading, setLostPasswordLoading] = useState(false);

  const handleLostPasswordForm = async (event) => {
    event.preventDefault();

    setLostPasswordLoading(true);

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

    if (data.status === 1) {
      router.push("/account/lost-password/verify");
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
          <div className={styles.login_form_container}>
            <h3 className={styles.login_form_heading}>Schimbă parola</h3>
            <form onSubmit={handleLostPasswordForm}>
              <div>
                <div className={styles.input_container}>
                  <label>E-mail</label>
                  <input type="email" name="username" required></input>
                </div>

                <div className={styles.submit_container}>
                  {loginIsLoading ? (
                    <button type="submit" disabled>
                      Se incarca
                    </button>
                  ) : (
                    <button type="submit">Trimite</button>
                  )}
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
