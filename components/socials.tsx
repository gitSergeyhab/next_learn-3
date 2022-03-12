import Head from "next/head";
import styles from "../styles/socials.module.scss";

const Socials = ({ socials }) => {

  if (!socials) {
    return null;
  }

  const socialList = socials.map(({ id, icon, path }) => (
    <li key={id}>
      <a href={path} target="_blank" rel="noopener noreferrer">
        <i className={`fab fa-${icon}`} aria-hidden="true" />
      </a>
    </li>
  ))

  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
    </Head>
    <ul className={styles.socials}>
        {socialList}
    </ul>
    </>
  );
}

export default Socials;