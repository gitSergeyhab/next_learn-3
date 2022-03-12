import { ReactNode } from "react";

type HeadingType = {
    children: ReactNode,
    tag?: string,
}


const Heading = ({children, tag} : HeadingType) => {
    const Tag = tag || 'h1';

    return (
        <Tag>{children}</Tag>
    )
}

export default Heading;