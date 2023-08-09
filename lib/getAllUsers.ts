const getAllUsers = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    // avoid throwing an error,
    return undefined;
  }

  const users = await res.json();

  return users;
};

export default getAllUsers;
