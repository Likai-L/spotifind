'use client';

import { useSearchParams } from 'next/navigation';

import useAuth from '../src/hooks/useAuth';
import Landing from './Landing';
import Bridge from './Bridge';

export default function Home() {
  const searchParams = useSearchParams();
  const accessToken = searchParams.get('access_token');
  useAuth(searchParams);
  return <div>{accessToken ? <Bridge /> : <Landing />}</div>;
}
