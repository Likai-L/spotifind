'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FINDUSERSBYSONG } from 'public/constants/pathNames';
import UserCard from './UserCard';
// import getUsersBySong from '@/helpers/getUsersBySong';

export default function UserCardRenderer({ track }) {
  const { uri } = track;
  const [userCards, setUserCards] = useState('');
  useEffect(() => {
    axios
      .post(FINDUSERSBYSONG, {
        currentSongUri: uri
      })
      .then(res => setUserCards(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log('usercards object under here', userCards);
  console.log(userCards);
  // I know it's best practice to put this straight in the return statement and forego the const userCardsComponent,
  // but this caused it not to render in this instance, maybe because its an api call?
  if (userCards.length > 0) {
    const userCardsComponent = userCards.map(userCard => (
      <UserCard
        alt={`${userCard.username}'s profile photo`}
        distance="4km"
        image={userCard.profilePictureUrl}
        key={userCard.uri}
        name={userCard.username}
      />
    ));
    return (
      <div className="flex flex-row h-3/4 w-full m-auto overflow-x-auto overflow-y-hidden scrollbar-hide items-center">
        {userCardsComponent}
      </div>
    );
  }
}
