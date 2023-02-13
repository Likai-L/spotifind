'use client';

import { useGlobalContext } from 'app/(context)';
import { useRouter } from 'next/navigation';

import { LANDING } from 'public/constants/pathNames';
// import useCurrentTrack from '@/hooks/useCurrentTrack';

export default function GuardPage({ children }) {
  const { credentials } = useGlobalContext();
  const router = useRouter();

  // Uncomment useCurrentTrack() to hide axios errors to api/socket in
  // /people when we do our presentation.
  // useCurrentTrack();

  if (!credentials.accessToken) {
    router.push(LANDING);
  }

  return children;
}
