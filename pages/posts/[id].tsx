import  Head  from "next/head";
import ContactInfo from "../../components/contact-info";
import Heading from "../../components/heading";

import { BASE_URL } from "../../const";



export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  const data = await res.json();

  const paths = data.map(({id}) => ({ params: { id: id.toString()} } ));

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {id} = context.params;
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  const post = await res.json();

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post }
  }
}

const Post = ({post}) => {
  const {title, body} = post;

    return (
        <>
            <Head>
                <title> Post</title>
            </Head>
            <div>Post</div>
            <Heading tag={'h2'}>{title}</Heading>
            <Heading tag={'h4'}>{body}</Heading>
            
        </>
    )
}



export default Post;