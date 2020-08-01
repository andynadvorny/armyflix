import React from 'react';
import { VideoCardGroupContainer, Title } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from '../Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.label;
  const categoryColor = category.color;
  const { videos } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
