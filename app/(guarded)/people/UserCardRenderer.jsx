'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FINDUSERSBYSONG, PEOPLE } from 'public/constants/pathNames';
import Button from 'app/(button)/Button';
import { useGlobalContext } from 'app/(context)';
import UserCard from './UserCard';
import Map from './(map)/Map';
import getDistance from '@/helpers/getDistance';
import createDirectChat from '@/helpers/createDirectChat';

export default function UserCardRenderer({ track }) {
  const { profile, displayTrack, longitude, latitude } = useGlobalContext();

  const [showMap, setShowMap] = useState(false);
  const { uri } = track;
  const [userCards, setUserCards] = useState('');
  console.log('DISPLAY TRACK', displayTrack);
  useEffect(() => {
    axios
      .post(FINDUSERSBYSONG, {
        currentSongUri: uri
      })
      .then(res => setUserCards(res.data))
      .catch(err => console.log(err));
  }, [displayTrack]);
  console.log('usercards object under here', userCards);
  console.log(userCards);

  if (userCards.length > 0) {
    //
    const userCardsFiltered = userCards.filter(
      user => user.spotifyUserUri !== profile.uri
    );
    console.log('userCardsFiltered', userCardsFiltered);
    const userCardsComponent = userCardsFiltered.map(userCard => (
      <UserCard
        alt={`${userCard.username}'s profile photo`}
        distance={`${Math.round(
          getDistance(
            latitude,
            longitude,
            Number(userCard.latitude),
            Number(userCard.longitude)
          )
        ).toLocaleString('en-US')} km away`}
        DmClickHandler={e => {
          e.preventDefault;
          createDirectChat(profile, userCard.username);
        }}
        image={userCard.profilePictureUrl}
        key={userCard.spotifyUserUri}
        name={userCard.username}
      />
    ));
    return (
      <div className="container m-auto bg-secondary min-w-[80%] w-4/5 h-3/5 max-h-max rounded-xl">
        <div className="flex flex-row">
          <h1 className="text-[2vh] p-5 cursor-default">
            {userCardsFiltered.length === 1
              ? `${userCardsFiltered.length} user found`
              : `${userCardsFiltered.length} users found`}
          </h1>
          <div className="my-auto">
            <Button
              content="View map"
              onClick={() => setShowMap(!showMap)}
              path={PEOPLE}
            />
          </div>
        </div>

        <div className="flex flex-row h-3/4 w-full m-auto overflow-x-auto overflow-y-hidden scrollbar-hide items-center">
          {showMap ? <Map users={userCardsFiltered} /> : null}
          {userCardsComponent}
        </div>
      </div>
    );
  }
  return (
    <div className="container m-auto bg-secondary min-w-[80%] w-4/5 h-3/5 max-h-max rounded-xl">
      <div className="flex flex-row">
        <h1 className="text-[2vh] p-5 cursor-default">
          {/* 0 users found, try another song */}
        </h1>
      </div>
    </div>
  );
}
