import Link from "next/link";
import styles from "@/styles/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_wrap}>
        <div className={styles.footer_row_1}>
          <div className={styles.footer_row_1_col}>
            <img src="" alt=""></img>
          </div>
          <div className={styles.footer_row_1_col}>
            <p>Cum functionează</p>
            <nav className={styles.footer_nav}>
              <li className={styles.footer_nav_li}>
                <Link
                  className={styles.footer_nav_li_a}
                  href="/about/?section=cumpararea"
                >
                  Cumpărarea unei mașini
                </Link>
              </li>
              <li className={styles.footer_nav_li}>
                <Link
                  className={styles.footer_nav_li_a}
                  href="/about/?section=vanzarea"
                >
                  Vânzarea unei mașini
                </Link>
              </li>
              <li className={styles.footer_nav_li}>
                <Link
                  className={styles.footer_nav_li_a}
                  href="/about/?section=finalizarea"
                >
                  Finalizarea vânzări
                </Link>
              </li>
              <li className={styles.footer_nav_li}>
                <Link
                  className={styles.footer_nav_li_a}
                  href="/about/?section=faq"
                >
                  FAQs
                </Link>
              </li>
            </nav>
          </div>
          <div className={styles.footer_row_1_col}>
            <p>Pentru vânzători</p>
            <nav className={styles.footer_nav}>
              <li className={styles.footer_nav_li}>
                <Link className={styles.footer_nav_li_a} href="/sell">
                  Publică mașina ta
                </Link>
              </li>
              <li className={styles.footer_nav_li}>
                <Link className={styles.footer_nav_li_a} href="/photos">
                  Ghid de fotografiere
                </Link>
              </li>
            </nav>
          </div>
          <div className={styles.footer_row_1_col}>
            <p>Link-uri utile</p>
            <nav className={styles.footer_nav}>
              <li className={styles.footer_nav_li}>
                <Link className={styles.footer_nav_li_a} href="/support">
                  Suport
                </Link>
              </li>
              <li className={styles.footer_nav_li}>
                <Link className={styles.footer_nav_li_a} href="/shipping">
                  Livrare
                </Link>
              </li>
              <li className={styles.footer_nav_li}>
                <Link className={styles.footer_nav_li_a} href="/terms">
                  Termeni și condiții
                </Link>
              </li>
            </nav>
          </div>
          <div className={styles.footer_row_1_col}></div>
        </div>
        <div className={styles.footer_row_2}>
          <div>
            <Link href="">
              <img src="" alt="" className={styles.anpc_button}></img>
            </Link>
            <Link href="">
              <img src="" alt="" className={styles.anpc_button}></img>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
