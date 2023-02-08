'use client';

import { useGlobalContext } from 'app/(context)';
import { useRouter } from 'next/navigation';

import { LANDING } from 'public/constants/pathNames';

export default function GuardPage({ children }) {
  const { credentials } = useGlobalContext();
  const router = useRouter();
  if (!credentials.accessToken) {
    router.push(LANDING);
  }

  return children;
}
