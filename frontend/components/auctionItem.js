import Link from "next/link";
import styles from "@/styles/page.module.css";
import { useEffect, useState } from "react";

export default function AuctionItem({ auction }) {
  const [timeLeft, setTimeLeft] = useState("Timp rămas");
  useEffect(() => {
    setInterval(() => {
      var intervalBetween = new Date(auction.endDate) - Date.now();

      var intervalTotalSeconds = Math.abs(intervalBetween / 1000);

      var intervalDays = Math.floor(intervalTotalSeconds / 86400);
      intervalTotalSeconds -= intervalDays * 86400;

      if (intervalDays > 0) {
        setTimeLeft(intervalDays + " zile");
      } else {
        var intervalHours = Math.floor(intervalTotalSeconds / 3600) % 24;
        intervalTotalSeconds -= intervalHours * 3600;

        var intervalMinutes = Math.floor(intervalTotalSeconds / 60) % 60;
        intervalTotalSeconds -= intervalMinutes * 60;

        var intervalSeconds = Math.floor(intervalTotalSeconds % 60);

        if (intervalSeconds < 10) {
          intervalSeconds = "0" + intervalSeconds;
        }
        setTimeLeft(
          intervalHours + ":" + intervalMinutes + ":" + intervalSeconds
        );
      }
    }, 1000);
  }, []);

  return (
    <li key={auction.id} className={styles.auction_item}>
      <div className={styles.auction_item_image}>
        <Link
          href={`/auction/${auction.id}/${auction.slug}`}
          className={styles.auction_item_image_link}
        >
          <div className={styles.auction_item_image_ratio}>
            <div className={styles.auction_item_image_wrap}>
              <img src={auction.featureImage}></img>
            </div>
          </div>
          <div className={styles.auction_item_image_minibar}>
            <span className={styles.auction_item_image_minibat_timeleft}>
              {timeLeft}
            </span>
            <span className={styles.auction_item_image_minibat_highestbid}>
              {auction.highestBid}
            </span>
          </div>
        </Link>
      </div>
      <div className={styles.auction_item_metadata}>
        <div className={styles.auction_item_metadata_title}>
          <Link href={`/auction/${auction.id}/${auction.slug}`}>
            {auction.title}
          </Link>
          <button className={styles.auction_item_metadata_watch}>a</button>
        </div>
        <p className={styles.auction_item_metadata_subtitle}>
          {auction.shortDescription}
        </p>
        <p className={styles.auction_item_metadata_location}>
          {auction.location}
        </p>
      </div>
    </li>
  );
}
