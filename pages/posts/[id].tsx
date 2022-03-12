import { GetStaticPaths, GetStaticProps } from 'next';
import  Head  from "next/head";
import Heading from "../../components/heading";

import { BASE_URL } from "../../const";
import { PostType } from '../../types';



export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  const data: PostType[] = await res.json();

  const paths = data.map(({id}) => ({ params: { id: id.toString()} } ));

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  const post = await res.json();

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post }
  }
}

const Post = ({post} : {post: PostType}) => {
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
