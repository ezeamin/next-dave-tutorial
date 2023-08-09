import type { Metadata } from 'next';
import Link from 'next/link';

import getAllUsers from '@/lib/getAllUsers';

export const metadata: Metadata = {
  title: 'Users',
};

const UsersPage = async () => {
  const users: User[] = await getAllUsers();

  return (
    <section>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
      <br />
      {users.map((user) => (
        <article key={user.id}>
          <p>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
          <br />
        </article>
      ))}
    </section>
  );
};

export default UsersPage;
