import styles from "@/styles/page.module.css";
import Link from "next/link";
import useSWR from "swr";
import { apiHost } from "./apiHost";

export default function AltSidebar() {
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
