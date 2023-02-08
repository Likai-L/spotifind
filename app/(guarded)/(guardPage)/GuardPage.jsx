'use client';

import { useGlobalContext } from 'app/(context)';
import { useRouter } from 'next/navigation';

const LANDING_PAGE = '/';

export default function GuardPage({ children }) {
  const { accessToken } = useGlobalContext();
  const router = useRouter();
  if (!accessToken) {
    router.push(LANDING_PAGE);
  }

  return children;
}
