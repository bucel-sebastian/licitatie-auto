import Link from "next/link";

import Footer from "@/components/footer";
import CustomHead from "@/components/head";
import Header from "@/components/header";

import styles from "@/styles/page.module.css";
import Sidebar from "@/components/sidebar";
import AuctionsList from "@/components/auctionsList";

export default function Home() {
  return (
    <>
      <CustomHead pageTitle={"Acasă"}></CustomHead>

      <Header></Header>

      <div className="page_wrap">
        <div className="page_content">
          <div></div>
          <div className={styles.page_row}>
            <div className={styles.page_col_1}>
              <h2>Licitații</h2>
              <AuctionsList></AuctionsList>
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
