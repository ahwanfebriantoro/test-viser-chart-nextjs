import Head from 'next/head';
import styles from './chart.module.css';
// import {InnerPie} from '../components/InnerPie';
import dynamic from 'next/dynamic';

const InnerPie = dynamic(() => import('../components/InnerPie'), {
  ssr: false
});
const BarLabel = dynamic(() => import('../components/BarLabel'), {
  ssr: false
});
const StackedBar = dynamic(() => import('../components/StackedBar'), {
  ssr: false
});
const BasicLine = dynamic(() => import('../components/BasicLine'), {
  ssr: false
});
const MultiSmoothLine = dynamic(() => import('../components/MultiSmoothLine'), {
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

const dataBar = [
  {
    name: '5K',
    type: '5K',
    value: 200000
  },
  {
    name: '10K',
    type: '10K',
    value: 50000
  }
];

const dataStackLunas = [
  {
    Pendaftar: 10,
    'Slot Kuota': 830,
    name: '5K'
  },
  {
    Pendaftar: 200,
    'Slot Kuota': 400,
    name: '10K'
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
        <div className={styles.chartWrapper}>
          <InnerPie data={data} />
        </div>
        <div className={styles.chartWrapper}>
          <BarLabel data={dataBar} />
        </div>
        <div className={styles.chartWrapper}>
          <StackedBar data={dataStackLunas} />
        </div>
        <div className={styles.chartWrapper}>
          <BasicLine />
        </div>
        <div className={styles.chartWrapper}>
          <MultiSmoothLine />
        </div>
      </main>
    </div>
  );
}
