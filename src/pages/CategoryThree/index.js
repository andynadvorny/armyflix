import React, { useEffect, useState } from 'react';
import PageCategory from '../../components/PageCategory';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import SiteLoader from '../../components/Loaders/SiteLoader';
import categoriesRepository from '../../repositories/categories';
import './CategoryThree.css';

function CategoryThree() {
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
                videoTitle={initialData[3].videos[0].title}
                url={initialData[3].videos[0].url}
                videoDescription="대취타 is the title track in Agust D's latest release D2. A powerful song that mixes classical Korean instruments and a trap beat with a video that is alone a feast for the eyes."
                bgUrl="https://t1.daumcdn.net/cfile/tistory/99AECE485EC73CE630?download"
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[3]}
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

export default CategoryThree;
