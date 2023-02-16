import { CREATECOMMENT, UPDATECOMMENT } from 'public/constants/pathNames';
import makeRequest from './makeRequest';

export function createComment(data) {
  return makeRequest(CREATECOMMENT, { method: 'POST', data }); // data: {songUri, authorUri, content, parentId}
}

export function updateComment(data) {
  return makeRequest(UPDATECOMMENT, { method: 'PUT', data }); // data: {commentId, content, userUri}
}
