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
    const responseBody = data.body;
    console.log(data);
    if (responseBody.status === 1) {
      router.push("/account/login");
    } else {
      // handle errors
    }
  };

  // const [firstNameValue, setFirstNameValue] = useState('');
  // const [lastNameValue, setLastNameValue] = useState('');
  // const [emailValue, setEmailValue] = useState('');
  // const [phoneValue, setPhoneValue] = useState('');
  // const [passwordValue, setPasswordValue] = useState('');
  // const [repasswordValue, setRepassowrdValue] = useState('');

  function handleInputNumber(event) {
    const keyCode = event.which || event.keyCode;

    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault();
    }
  }

  function handleInputLetter(event) {
    const keyCode = event.which || event.keyCode;

    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122)) {
      event.preventDefault();
    }
  }

  function handleInputLenght(event) {
    const inputString = event.target.value;
    if (inputString.length < 8) {
      event.target.classList.add("input_invalid");
    }
  }

  const [emailIsValid, setEmailisValid] = useState(true);

  const handleEmailInput = (event) => {
    if (event.target.value !== "") {
      setEmailisValid(event.target.checkValidity());
    } else {
      setEmailisValid(true);
    }
  };

  const [passwordIsValid, setPasswordisValid] = useState(true);
  const [repasswordIsValid, setRepasswordisValid] = useState(true);

  const handlePasswordInput = (event) => {
    setPasswordisValid(event.target.value.length > 8);
    if (document.getElementById("repasswordInput").value !== "") {
      setRepasswordisValid(
        event.target.value === document.getElementById("repasswordInput").value
      );
    }
  };

  const handleRepasswordInput = (event) => {
    setRepasswordisValid(
      event.target.value === document.getElementById("passwordInput").value
    );
  };

  return (
    <>
      <CustomHead pageTitle={"Înregistrare"}></CustomHead>

      <Header></Header>

      <div className="page_wrap">
        <div className="page_content">
          <div className={styles.login_form_container}>
            <h3 className={styles.login_form_heading}>Înregistrare</h3>
            <form onSubmit={handleRegisterForm}>
              <div>
                <div className={styles.input_container}>
                  <label>Prenume</label>
                  <input
                    type="text"
                    name="first-name"
                    title="Introdu prenume"
                    onKeyPress={handleInputLetter}
                    required
                  ></input>
                </div>
                <div className={styles.input_container}>
                  <label>Nume</label>
                  <input
                    type="text"
                    name="last-name"
                    title="Introdu nume"
                    onKeyPress={handleInputLetter}
                    required
                  ></input>
                </div>
                <div className={styles.input_container}>
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="username"
                    title="Introdu email-ul"
                    onInput={handleEmailInput}
                    className={`${emailIsValid ? "" : styles.input_invalid}`}
                    required
                  ></input>
                </div>
                <div className={styles.input_container}>
                  <label>Număr de telefon</label>
                  <input
                    type="text"
                    name="phone"
                    title="Introdu numărul de telefon"
                    onKeyPress={handleInputNumber}
                  ></input>
                </div>
                <div className={styles.input_container}>
                  <label>Parola</label>
                  <input
                    type="password"
                    name="password"
                    id="passwordInput"
                    title="Introdu parola"
                    className={`${passwordIsValid ? "" : styles.input_invalid}`}
                    onInput={handlePasswordInput}
                    required
                  ></input>
                </div>
                <div className={styles.input_container}>
                  <label>Reintrodu parola</label>
                  <input
                    type="password"
                    name="re-password"
                    title="Introdu parola"
                    id="repasswordInput"
                    className={`${
                      repasswordIsValid ? "" : styles.input_invalid
                    }`}
                    onInput={handleRepasswordInput}
                    required
                  ></input>
                </div>
                <div className={styles.input_container}>
                  <label className={styles.input_checkbox}>
                    <input type="checkbox" name="tcagreement" required></input>{" "}
                    Sunt de acord cu&nbsp;
                    <Link href="/terms" className={styles.link_alt}>
                      termenii și condițiile
                    </Link>
                  </label>
                </div>
                <div className={styles.submit_container}>
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
