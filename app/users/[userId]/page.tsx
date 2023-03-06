import { Suspense } from 'react';
import { Metadata } from 'next';

import UserPosts from '@/components/UserPosts';

import getUser from '@/lib/getUser';
// import getUserPosts from '@/lib/getUserPosts';

type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata: Promise<Metadata> = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`
  }
}

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  // const postsData: Promise<Post[]> = getUserPosts(userId);

  // Avoids waterfalls
  // const [user, posts] = await Promise.all([userData, postsData]);

  const user = await userData;

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<p>Loading...</p>}>
        {/* <UserPosts posts={posts} /> */}
        {/* @ts-expect-error Server Component -> Temporal */}
        <UserPosts userId={userId} />
      </Suspense>
    </>
  );
};

export default UserPage;
