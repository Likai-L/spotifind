export const COMMENT_SELECT_FIELD = {
  id: true,
  content: true,
  parentId: true,
  createdAt: true,
  author: {
    select: {
      spotifyUserUri: true,
      username: true,
      profilePictureUrl: true,
      recentLikes: true
    }
  }
};
