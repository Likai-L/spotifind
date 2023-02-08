'use client';

import { useSearchParams } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import Landing from './Landing';

export default function Home() {
  const searchParams = useSearchParams();
  const accessToken = searchParams.get('access_token');
  useAuth(searchParams);
  return <div>{accessToken ? <p>loading</p> : <Landing />}</div>;
}
