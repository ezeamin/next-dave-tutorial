import { Suspense } from 'react';
import { Metadata } from 'next';

import UserPosts from '@/components/UserPosts';

import getUser from '@/lib/getUser';
import getAllUsers from '@/lib/getAllUsers';
// import getUserPosts from '@/lib/getUserPosts';

import { notFound } from 'next/navigation';

type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  if(!user.name){
    return {
      title: "User not found"
    }
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
};

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  // const postsData: Promise<Post[]> = getUserPosts(userId);

  // Avoids waterfalls
  // const [user, posts] = await Promise.all([userData, postsData]);

  const user = await userData;

  if(!user.name){
    return notFound();
  }

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

// It tells next js to generate static pages for each user
// enabling SSG for these pages (using ISR at the fetch function)
export const generateStaticParams = async () => {
  const users: User[] = await getAllUsers();

  // Params need to be strings
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
};

export const dynamicParams = true;
