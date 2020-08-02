import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {
  BannerMainContainer, ContentAreaContainer, WatchMobileButton, PlayButton,
} from './styles';
import MainTitle from '../../assets/img/MainTitle.png';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
  bgUrl,
}) {
  const youTubeID = getYouTubeId(url);

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            <img className="MainTitle" src={MainTitle} alt="we are not seven with you" />
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
          <PlayButton href={url} target="_blank">
            <i className="fas fa-play" />
            {' '}
            Play
          </PlayButton>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchMobileButton href={url} target="_blank">
            Assistir
          </WatchMobileButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
