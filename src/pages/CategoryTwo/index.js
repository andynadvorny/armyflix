import React, { useEffect, useState } from 'react';
import PageCategory from '../../components/PageCategory';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import SiteLoader from '../../components/Loaders/SiteLoader';
import categoriesRepository from '../../repositories/categories';
import './CategoryTwo.css';

function CategoryTwo() {
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
                videoTitle={initialData[2].videos[0].title}
                url={initialData[2].videos[0].url}
                videoDescription="I NEED U marks the beggining of the storyline known as the BTS Universe. Take a dive into the story spread through several Music Videos and short films starting here."
                bgUrl="https://btsbr.files.wordpress.com/2015/05/11174569_1053819134633348_7115500304662291460_o.jpg"
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[2]}
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

export default CategoryTwo;
