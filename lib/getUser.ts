const getUser = async (userId: string) => {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch user ${userId}}`);
  }

  return res.json();
};

export default getUser;
