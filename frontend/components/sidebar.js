import styles from "@/styles/page.module.css";
import Link from "next/link";
import useSWR from "swr";
import { apiHost } from "./apiHost";
import { useState } from "react";

const recentAuctionsFetcher = async () => {
  const response = await fetch(apiHost + "/sidebar/data");
  const data = await response.json();
  console.log(data);

  return data;
};

export default function Sidebar() {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [sidebarData, setSidebarData] = useState(null);

  //   useEffect(() => {
  //     async function fetchSidebardData() {
  //       const response = await fetch("http://localhost:3000/sidebar/data");
  //       const data = await response.json();
  //       setSidebarData(data);
  //       setIsLoading(false);
  //     }
  //     fetchSidebardData();
  //   }, []);

  const { recentAuctionsData, error } = useSWR(
    "recentAuctions",
    recentAuctionsFetcher
  );

  if (error) {
    return (
      <>
        <h2>Cele mai recente</h2>
        <p>A aparut o eroare</p>
      </>
    );
  }

  if (!recentAuctionsData) {
    return (
      <>
        <h2>Cele mai recente</h2>
        <p>Se incarca</p>
      </>
    );
  }

  return (
    <>
      <h2>Cele mai recente</h2>
      <ul className={styles.auctions_list_col}>
        <li className={styles.auction_item}>
          <div className={styles.auction_item_image}>
            <Link href="" className={styles.auction_item_image_link}>
              <div className={styles.auction_item_image_ratio}>
                <div className={styles.auction_item_image_wrap}>
                  <img src="#"></img>
                </div>
              </div>
              <div className={styles.auction_item_image_minibar}></div>
            </Link>
          </div>
          <div className={styles.auction_item_metadata}>
            <div className={styles.auction_item_metadata_title}>
              <Link href="#">Titlu</Link>
              <button className={styles.auction_item_metadata_watch}>a</button>
            </div>
            <p className={styles.auction_item_metadata_subtitle}>
              Subtitlu bla bla bla bla
            </p>
            <p className={styles.auction_item_metadata_location}>Locatie</p>
          </div>
        </li>
      </ul>
    </>
  );
}
