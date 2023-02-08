'use client';

import { useGlobalContext } from 'app/(context)';
import { useRouter } from 'next/navigation';

import { LANDING } from 'public/constants/pathNames';

export default function GuardPage({ children }) {
  const { accessToken } = useGlobalContext();
  const router = useRouter();
  if (!accessToken) {
    router.push(LANDING);
  }

  return children;
}
