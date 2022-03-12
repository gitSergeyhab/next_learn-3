import  Head  from "next/head";
import Link from 'next/link';
import { BASE_URL } from "../../const";
import { ContactType } from '../../types';



export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  const contacts = await res.json();

  if (!contacts) {
    return { notFound: true };
  }

  return {
    props: { contacts }
  }
}


const Contact = ({contacts} : {contacts: ContactType[]}) => {

  const contactList = contacts.map(({id, name, email}) =>
    <li key={id}>
      <Link href={`contacts/${id}`}>
        <a><span>Name: {name} - Email: {email}</span></a>
      </Link>
    </li>);

    return (
      <>
        <Head>
          <title> Contacts</title>
        </Head>
        <div>Contacts List</div>
        <ul>{contactList}</ul>
      </>
    )
}

export default Contact;
