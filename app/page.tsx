import { fetchFn } from '@/lib/fetchFn';
import styles from './page.module.css';

const Home = async () => {
  const { isSuccess, isError, error, data } = await fetchFn<object>({
    url: 'http://localhost:3000/api/hello',
  });

  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <p>
        {JSON.stringify(data)}
        {data?.toString()}
      </p>
    </main>
  );
};

export default Home;
