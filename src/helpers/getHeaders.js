/**
 * get the headers object for spotify API calls
 * @param   {{}} accessToken access token from the credentials state
 * @return  {{}}      an object containing request headers to pass in axios API calls as the second argument
 */
export default function getHeaders(accessToken) {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}}`,
      'Content-Type': 'application/json'
    }
  };
}
