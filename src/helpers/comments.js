import {
  CREATECOMMENT,
  DELETECOMMENT,
  UPDATECOMMENT
} from 'public/constants/pathNames';
import makeRequest from './makeRequest';

export function createComment(data) {
  return makeRequest(CREATECOMMENT, { method: 'POST', data }); // data: {songUri, authorUri, content, parentId}
}

export function updateComment(data) {
  return makeRequest(UPDATECOMMENT, { method: 'PUT', data }); // data: {commentId, content}
}
export function deleteComment(data) {
  return makeRequest(DELETECOMMENT, { method: 'DELETE', data }); // data: {id}
}
