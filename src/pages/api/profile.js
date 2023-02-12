import prisma from '@/helpers/prisma';

export default async function profileHandler(req, res) {
  const newUser = req.body;
  const user = await prisma.user.findUnique({
    where: {
      spotifyUserUri: newUser.spotifyUserUri
    }
  });
  // no such user found in db
  if (!user) {
    console.log('🚨🚨🚨No such user found, creating...');
    await prisma.user.create({ data: newUser }); // rest already contain sorted user data
    console.log('New user created', newUser);
    res.end();
    return;
  }
  // user exists, check if anything is changed
  if (user.profilePictureUrl !== newUser.profilePictureUrl) {
    console.log('🚨🚨🚨pfp chganged, updating...');
    await prisma.user.update({
      where: { spotifyUserUri: user.profilePictureUrl },
      data: { profilePictureUrl: newUser.profilePictureUrl }
    });
    console.log('profile picture updated');
  }

  if (user.currentSongUri !== newUser.currentSongUri) {
    console.log('🚨🚨🚨current song changed, updating...');
    await prisma.user.update({
      where: { spotifyUserUri: user.profilePictureUrl },
      data: { currentSongUri: newUser.currentSongUri }
    });
  }
  console.log('Playing song updated:', newUser.currentSongUri);

  res.end();
}
