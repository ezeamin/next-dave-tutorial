const getUser = async (userId: string) => {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/users/${userId}`,{
      next: {
        revalidate: 60,
      }
    }
  );
  if (!res.ok) {
    // avoid throwing an error,
    return undefined;
  }

  return res.json();
};

export default getUser;
