import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from 'src/components/Hero';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Photography Portfolio Website</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Hero />
  </div>
);

export default Home;
