import { CREATECOMMENT } from 'public/constants/pathNames';
import makeRequest from './makeRequest';

export default function createComment(data) {
  return makeRequest(CREATECOMMENT, { method: 'POST', data }); // data: {songUri, authorUri, content, parentId}
}
