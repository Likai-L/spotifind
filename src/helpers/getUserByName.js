import prisma from "./prisma";
import { USERSEARCH } from 'public/constants/pathNames';
import axios from 'axios';

export default async function useUserSearch(search) {
  // make request to database to find a user with that name!
  await axios
    .get(USERSEARCH, {
      name: search
    })
    .then(res => console.log('response from handleSubmit', res))
    .catch(err => console.log('error from handleSubmit', err));
}
