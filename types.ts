type Address = {street: string, suite: string, city: string}


export type ContactType = {
  id: number,
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

export type SocialType = {
  id: number,
  icon: string,
  path: string,
}
