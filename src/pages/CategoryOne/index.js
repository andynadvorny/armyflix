import React, { useEffect, useState } from 'react';
import PageCategory from '../../components/PageCategory';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import SiteLoader from '../../components/Loaders/SiteLoader';
import categoriesRepository from '../../repositories/categories';
import './CategoryOne.css';

function CategoryOne() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      });
  }, []);

  return (
    <PageCategory>

      {initialData.length === 0 && <SiteLoader />}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[1].videos[0].title}
                url={initialData[1].videos[0].url}
                videoDescription="Outro: Ego finalizes the Map Of The Soul series with a funky yet deep dive into self acceptance."
                bgUrl='https://i.pinimg.com/originals/80/09/16/800916ee43e79d07b99fafe5e4aed04b.png'
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[1]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </PageCategory>
  );
}

export default CategoryOne;
