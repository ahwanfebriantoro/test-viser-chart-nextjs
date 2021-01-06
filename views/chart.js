import Head from 'next/head';
import styles from '../styles/Home.module.css';
// import {InnerPie} from '../components/InnerPie';
import dynamic from 'next/dynamic';

const InnerPie = dynamic(() => import('../components/InnerPie'), {
  ssr: false
});

const data = [
  {
    name: 'Pemasukan',
    value: 10
  },
  {
    name: 'Jumlah Diskon',
    value: 10
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test viser chart using Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Test viser chart using <a href="https://nextjs.org">Next.js</a>
        </h1>
        <div style={{ width: '100%' }}>
          <InnerPie data={data} />
        </div>
      </main>
    </div>
  );
}
