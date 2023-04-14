import styles from "@/styles/page.module.css";
import AuctionItem from "./auctionItem";
import { apiHost } from "./apiHost";

export default function AuctionsList() {
  const auctionsList = [
    {
      id: 1,
      slug: "ceva-slug-1",
      endDate: "2023-04-12 11:00:00",
      title: "Titlu - 1",
      highestBid: 12300,
    },
    {
      id: 2,
      slug: "ceva-slug-2",
      endDate: "2023-04-23 13:00:00",
      title: "Titlu - 2",
      highestBid: 6000,
    },
    {
      id: 3,
      slug: "ceva-slug-3",
      endDate: "2023-04-23 13:00:00",
      title: "Titlu - 3",
      highestBid: 90000,
    },
  ];

  return (
    <ul className={styles.auctions_list}>
      {auctionsList.map((auction) => {
        return <AuctionItem key={auction.id} auction={auction}></AuctionItem>;
      })}
    </ul>
  );
}
