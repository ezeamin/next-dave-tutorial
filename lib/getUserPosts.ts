const getUserPosts = async (userId: string) => {
    const res = await fetch(
      `http://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch user ${userId}}'s posts`);
    }
    
    return res.json();
  };
  
  export default getUserPosts;
  