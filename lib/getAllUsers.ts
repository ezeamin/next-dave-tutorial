const getAllUsers = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  const users = await res.json();

  return users;
};

export default getAllUsers;
