import type { APIRoute } from 'astro';

const client_id = import.meta.env.SPOTIFY_CLIENT_ID; // Replace with your actual client ID
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET; // Replace with your actual client secret

const detUnormalaNormalaId = '47UOp5FkNiAs9As60REzDo'; // Det onormala normala Spotify ID

const getToken = async () => {
  const authOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
  };

  const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
  const data = await response.json();
  return data.access_token;
};

export const GET: APIRoute = async function () {
  const token = await getToken();

  const response = await fetch(`https://api.spotify.com/v1/shows/${detUnormalaNormalaId}/episodes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};
