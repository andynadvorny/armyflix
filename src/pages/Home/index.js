import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import SiteLoader from '../../components/Loaders/SiteLoader';
import Footer from '../../components/Footer';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInitialData(categoriesWithVideos);
      });
  }, []);

  return (
    <div>
      <Header />

      {initialData.length === 0 && <SiteLoader />}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription="A celebration of 7 years since the BTS debut, We Are Bulletproof: the Eternal is a beautifully animated MV that shows the BTS mombers going through different eras and the varied stages of their career until the present moment."
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
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

      <Footer />
    </div>
  );
}

export default Home;
