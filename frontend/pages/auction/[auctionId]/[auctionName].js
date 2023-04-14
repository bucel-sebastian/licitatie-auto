import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

import Footer from "@/components/footer";
import CustomHead from "@/components/head";
import Header from "@/components/header";

import styles from "@/styles/page.module.css";
import AltSidebar from "@/components/altsidebar";
import AuctionsList from "@/components/auctionsList";

import { apiHost } from "@/components/apiHost";

export default function auctionPage() {
  return (
    <>
      <CustomHead pageTitle={"auctionData.title"}></CustomHead>

      <Header></Header>
      <div className="page_wrap">
        <div className="page_content">
          <div>
            <div>
              <h1>auctionData.title</h1>
              {auctionId}
              {auctionName}
            </div>
            <div>
              <p>auctionData.shortDescription</p>
            </div>
            <div>{/* imagini */}</div>
          </div>
          {/* <div className={styles.page_row}>
            <div className={styles.page_col_1}>
              <h2>Licitații</h2>
              <AuctionsList></AuctionsList>
            </div>
            <div className={styles.page_col_2}>
              <AltSidebar></AltSidebar>
            </div>
          </div> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
