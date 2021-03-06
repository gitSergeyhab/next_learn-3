import Heading from "../components/heading";
import styles from '../styles/home.module.scss';
import  Head  from "next/head";
import Socials from "../components/socials";
import { SocialType } from '../types';


export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/socials`);
  const socials: SocialType[] = await res.json();

  if (!socials) {
    return { notFound: true };
  }

  return {
    props: { socials }
  }
}



const Home = ({socials} : {socials: SocialType[]}) => {

  return (
    <>
    <Head>
      <title> home </title>
    </Head>
    <div className={styles.wrapper}>
      <Heading tag={'h2'}>KILL !!!</Heading>
      <Socials socials={socials}/>
    </div>


    </>
  )
}

export default Home;
