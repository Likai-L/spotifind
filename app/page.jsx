'use client';

import { useSearchParams } from 'next/navigation';

import useAuth from '@/hooks/useAuth';
import Landing from './Landing';
import LandingTransition from './LandingTransition';

export default function Home() {
  const searchParams = useSearchParams();
  const accessToken = searchParams.get('access_token');
  useAuth(searchParams);
  return <div>{accessToken ? <LandingTransition /> : <Landing />}</div>;
}
