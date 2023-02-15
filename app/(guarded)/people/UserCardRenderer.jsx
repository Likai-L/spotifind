'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { FINDUSERSBYSONG, PEOPLE } from 'public/constants/pathNames';
import Button from 'app/(button)/Button';
import { useGlobalContext } from 'app/(context)';
import UserCard from './UserCard';
import Map from './(map)/Map';
import getDistance from '@/helpers/getDistance';
// import getUsersBySong from '@/helpers/getUsersBySong';

export default function UserCardRenderer({ track }) {
  const { profile, displayTrack } = useGlobalContext();

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

  // I know it's best practice to put this straight in the return statement and forego the const userCardsComponent,
  // but this caused it not to render in this instance, maybe because its an api call?
  if (userCards.length > 0) {
    //
    const userCardsFiltered = userCards.filter(
      user => user.spotifyUserUri !== profile.uri
    );
    const currentUserFiltered = userCards.filter(
      user => user.spotifyUserUri === profile.uri
    );
    console.log('currentUserFiltered', currentUserFiltered);
    console.log('userCardsFiltered', userCardsFiltered);
    const userCardsComponent = userCardsFiltered.map(userCard => (
      <UserCard
        alt={`${userCard.username}'s profile photo`}
        distance={`${Math.round(
          getDistance(
            Number(currentUserFiltered[0].latitude),
            Number(currentUserFiltered[0].longitude),
            Number(userCard.latitude),
            Number(userCard.longitude)
          )
        )} km away`}
        DmClickHandler={async e => {
          e.preventDefault;
          const authObject = {
            'Project-ID': 'f06a82ab-ee91-4d7d-9b6d-90b79d3392ca',
            'User-Name': currentUserFiltered[0].username,
            'User-Secret': currentUserFiltered[0].spotifyUserUri
          };
          try {
            await axios.put(
              'https://api.chatengine.io/chats/',
              {
                usernames: [currentUserFiltered[0].username, userCard.username],
                title: userCard.username,
                is_direct_chat: true
              },
              { headers: authObject }
            );
          } catch (err) {
            console.log('somethign went wrong as usual', err);
          }
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
          {showMap ? (
            <Map currentUser={currentUserFiltered} users={userCardsFiltered} />
          ) : null}
          {userCardsComponent}
        </div>
      </div>
    );
  }
}
