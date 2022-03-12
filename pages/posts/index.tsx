import  Head  from "next/head";
import Link from 'next/link';
import { BASE_URL } from "../../const";
import { PostType } from "../../types";



export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/posts?_limit=10`);
  const posts = await res.json();

  if (!posts) {
    return { notFound: true };
  }

  return {
    props: { posts }
  }
}




const Posts = ({posts} : {posts: PostType[]}) => {
  const postList = posts.map(({id, title}) => 
  <li key={id}>
      <Link href={`posts/${id}`}>
          <a><span>Title: {title}</span></a>
      </Link>
  </li>);

return ( 
<>
  <Head>
      <title> Posts</title>
  </Head>
  <div>Posts List</div>
  <ul>{postList}</ul> 
</>

)} 

export default Posts;