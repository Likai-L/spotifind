'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FINDUSERSBYSONG } from 'public/constants/pathNames';
import UserCard from './UserCard';
// import getUsersBySong from '@/helpers/getUsersBySong';

export default function UserCardRenderer({ track }) {
  const { uri, albumCoverUrl, trackName, artistName, albumName } = track;
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

  if (userCards.length > 0) {
    const userCardsComponent = [];
    for (const userCard of userCards) {
      userCardsComponent.push(
        <UserCard
          alt={userCard.username}
          distance="4km"
          image={userCard.profilePictureUrl}
          name={userCard.username}
        />
      );
    }
    return <div>{userCardsComponent}</div>;
  }
}
