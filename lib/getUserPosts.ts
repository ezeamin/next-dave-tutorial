const getUserPosts = async (userId: string) => {
    const res = await fetch(
      `http://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!res.ok) {
      // avoid throwing an error,
      return undefined;
    }
    
    return res.json();
  };
  
  export default getUserPosts;
  