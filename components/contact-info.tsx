import { ContactType } from "../types";
import Heading from "./heading";

const ContactInfo = ({contact} : {contact: ContactType}) => {
    const {name, email, address, website} = contact || {};

    const {street, suite, city} = address || {};

    return (
        <>
            <Heading tag={'h2'}> {name} </Heading>
            <Heading tag={'h3'}>Email:  {email} </Heading>
            <Heading tag={'h3'}>Web:  {website} </Heading>
            <Heading tag={'h4'}>Address:  {city}, {street}, {suite} </Heading>
        </>
    )
}

export default ContactInfo;