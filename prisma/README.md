# Prisma Commands

- `npm run db:reset` to pull db changes.
- `npm run db:push` to push changes.
- `npx prisma studio` to view the tables in browser @localhost:5555.
- `npx prisma generate` to just update local db.

---

You can now start using Prisma Client in your code. Reference: https://pris.ly/d/client

```js
import { PrismaClient } from './prisma/generated/prisma-client-js';
const prisma = new PrismaClient();
```

Example usage: 
```js
const createNewUser = async () => {
  const newUser = await prisma.user.create({
    data: {
      username: 'steve',
      spotifyUserUri: 'sdfpniujsadnjui32q98'
    },
  });

const users = await prisma.user.findMany();
};
```
