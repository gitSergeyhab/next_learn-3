import  Head  from "next/head";
import ContactInfo from "../../components/contact-info";

import { BASE_URL } from "../../const";



export const getServerSideProps = async (context) => {
    const {id} = context.params;
  const res = await fetch(`${BASE_URL}/users/${id}`);
  const contacts = await res.json();

  if (!contacts) {
    return { notFound: true };
  }

  return {
    props: { contacts }
  }
}


const Contact = ({contacts}) => {

    return (
        <>
            <Head>
                <title> Contacts</title>
            </Head>
            <div>Contact</div>
            <ContactInfo contact={contacts}/>
        </>
    )
}



export default Contact;