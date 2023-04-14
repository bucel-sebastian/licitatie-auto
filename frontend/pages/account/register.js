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
  const [registerIsLoading, setRegisterLoading] = useState(false);

  const handleRegisterForm = async (event) => {
    event.preventDefault();

    setRegisterLoading(true);

    let requestBody = new FormData();
    for (const p of new FormData(event.target)) {
      requestBody.append(p[0], p[1]);
      console.log(p[0], p[1]);
    }

    const response = await fetch(apiHost + "/client/register", {
      method: "POST",
      body: requestBody,
    });
    const data = await response.json();

    if (data.status === 1) {
      router.push("/account/login");
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
            <form onSubmit={handleRegisterForm}>
              <div>
                <div>
                  <label>E-mail</label>
                  <input type="email" name="username" required></input>
                </div>
                <div>
                  <label>Parola</label>
                  <input type="password" name="password" required></input>
                </div>
                <div>
                  {registerIsLoading ? (
                    <button type="submit" disabled>
                      Se incarca
                    </button>
                  ) : (
                    <button type="submit">Înregistrare</button>
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
