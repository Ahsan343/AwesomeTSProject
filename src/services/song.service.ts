import {useMutation} from 'react-query';
import {LyricsFormValues} from './types';
import apiClient from './api.service';

const lyrics = async (params: LyricsFormValues) => {
  console.log(`https://api.lyrics.ovh/v1/${params.artist}/${params.title}`)
  const res = await apiClient.get(
    `https://api.lyrics.ovh/v1/${params.artist}/${params.title}`,
  );
  return res;
};

export function useLyrics() {
  return useMutation('lyrics', lyrics);
}
