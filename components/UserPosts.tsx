import getUserPosts from '@/lib/getUserPosts';

type Props = {
  userId: string;
};

const UserPosts = async ({ userId }: Props) => {
  const posts = await getUserPosts(userId);

  return (
    <>
      {posts.map((post: Post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <br />
        </article>
      ))}
    </>
  );
};

export default UserPosts;
