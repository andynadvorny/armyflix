import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
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

      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
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
