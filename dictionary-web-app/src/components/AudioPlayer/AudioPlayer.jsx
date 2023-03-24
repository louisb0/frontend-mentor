import React from "react";
import styled from "styled-components";

import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

import { ReactComponent as PlayIcon } from "./assets/icon-play.svg";
import { ReactComponent as PauseIcon } from "./assets/icon-pause.svg";
import { QUERIES } from "../../constants";

function AudioPlayer({ src, ...delegated }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef();

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [isPlaying]);

  function handleAudioEnd() {
    setIsPlaying(false);
  }

  return (
    <Wrapper
      onClick={() => {
        setIsPlaying(!isPlaying);
      }}
      {...delegated}
    >
      {isPlaying ? <ResponsivePauseIcon /> : <ResponsivePlayIcon />}

      <audio src={src} ref={audioRef} onEnded={handleAudioEnd} />
      <VisuallyHidden>Play Pronounciation</VisuallyHidden>
    </Wrapper>
  );
}

const Wrapper = styled(UnstyledButton)`
  &:hover svg {
    & circle {
      opacity: 1;
      transition: opacity 0.15s ease-in-out;
    }

    & path {
      fill: hsl(var(--color-white)); // play fill
      stroke: hsl(var(--color-white)); // pause fill
    }
  }

  @media ${QUERIES.mobileAndBelow} {
    --sizing: 56px;
    width: var(--sizing);
    height: var(--sizing);
  }
`;

const ResponsivePlayIcon = styled(PlayIcon)`
  @media ${QUERIES.mobileAndBelow} {
    width: var(--sizing);
    height: var(--sizing);
  }
`;

const ResponsivePauseIcon = styled(PauseIcon)`
  @media ${QUERIES.mobileAndBelow} {
    width: var(--sizing);
    height: var(--sizing);
  }
`;

export default AudioPlayer;
