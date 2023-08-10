import { fetchFn } from '@/lib/fetchFn';
import styles from './page.module.css';

const Home = async () => {
  const { isSuccess, isError, error, data } = await fetchFn({
    url: '/api/hello',
    baseUrl: 'http://localhost:3000',
  });

  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <p>Is success: {isSuccess ? '✅' : '❌'}</p>
      <p>Is error: {isError ? '✅' : '❌'}</p>
      {error ? <p>{error.toString()}</p> : <p>Data: {data?.toString()}</p>}
    </main>
  );
};

export default Home;
