type Address = {street: string, suite: string, city: string}


export type ContactType = {
    name: string,
    email: string,
    address: Address,
    website: string,
}


export type PostType = {
    title: string,
    body: string,
    id: number,
}