import { getUserByName } from 'prisma/users';
import User from './user';

const Page = async ({ params }) => {
  const { user } = await getUserByName(params.user);

  return <User user={user} />;
};

export default Page;
