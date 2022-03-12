import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/heading";
import styles from "../styles/404.module.scss";
import  Head  from "next/head";


const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title> 404 </title>
      </Head>
      <div className={styles.wrapper}>
        <div>
          <Heading>404</Heading>
          <Heading tag="h2">Something is going wrong...</Heading>
        </div>
      </div>
    </>

  )
};

export default ErrorPage;