import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next';
import { AddTodoForm } from '../components/AddTodoForm'

//import { connection } from './api/hello'


export const getServerSideProps: GetServerSideProps = async () => {

  const isLocalDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isLocalDevelopment
    ? 'http://localhost:3000'
    : `https://${process.env.VERCEL_URL}`;

  const res = await fetch(`${baseUrl}/api/fetchData`);
  //
  const data = await res.json();
  //
  return {
    props: {
      data,
    },
  };
};

interface HomeProps {
  data: any;
}

export default function Home({ data }: HomeProps) {

  console.log(data, " data");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>1 2</h1>
        <AddTodoForm />
      </div>
    </main>
  )
}
