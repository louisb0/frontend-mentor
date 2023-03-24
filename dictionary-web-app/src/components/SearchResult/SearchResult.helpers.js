export const getAudioSrc = (phonetics) => {
  const hasAudio = phonetics.filter((phonetic) => {
    return phonetic.audio.length > 0;
  });

  if (hasAudio.length === 0) {
    return false;
  }

  return hasAudio[0].audio;
};
