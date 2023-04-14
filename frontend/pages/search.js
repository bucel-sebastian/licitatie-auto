import Link from "next/link";
import { useRouter } from "next/router";

import Footer from "@/components/footer";
import CustomHead from "@/components/head";
import Header from "@/components/header";

import styles from "@/styles/page.module.css";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import { apiHost } from "./apiHost";

export default function Search() {
  const router = useRouter();
  const { query } = router.query;
  console.log(router.query);
  if (query) {
    const [isSearching, setIsSearching] = useState(true);
    const [searchQueryData, setSearchQueryData] = useState(null);

    useEffect(() => {
      async function fetchSearchQueryData() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
          //   ,
          //   {
          //     method: "POST",
          //     data: JSON.stringify({ query: query }),
          //   }
        );
        const data = await response.json();
        setSearchQueryData(data);
        setIsSearching(false);
      }
      fetchSearchQueryData();
    }, []);

    console.log(searchQueryData);
  }
  return (
    <>
      <CustomHead pageTitle={"Cautare"}></CustomHead>

      <Header></Header>

      <div className="page_wrap">
        <div className="page_content">
          <div className={styles.page_row}>
            <div className={styles.page_col_1}>
              <h1>Rezultatele cautării - "{query}"</h1>
              <div></div>
            </div>
            <div className={styles.page_col_2}>
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
