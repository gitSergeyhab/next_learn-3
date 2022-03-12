import { GetServerSideProps } from 'next';
import  Head  from "next/head";
import ContactInfo from "../../components/contact-info";

import { BASE_URL } from "../../const";
import { ContactType } from '../../types';



export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id }  = context.params as { id: string };
  if (!id) {
    return { notFound: true };
  }
  const res = await fetch(`${BASE_URL}/users/${id}`);
  const contacts = await res.json();

  if (!contacts) {
    return { notFound: true };
  }

  return {
    props: { contacts }
  };
};


const Contact = ({contacts} : {contacts: ContactType}) => {

  return (
    <>
      <Head>
        <title> Contacts</title>
      </Head>
      <div>Contact</div>
      <ContactInfo contact={contacts}/>
    </>
  );
};



export default Contact;
