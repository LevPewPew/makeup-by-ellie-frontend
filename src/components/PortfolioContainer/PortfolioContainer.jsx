import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-component';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Work from '../Work/Work';
import FilterBtns from '../FilterBtns/FilterBtns';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './PortfolioContainer.scss';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

function PortfolioContainer() {
  const filteredPortfolioData = useSelector((state) => state.portfolioReducer.filteredPortfolioData);
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
  const [ viewerIsOpen, setViewerIsOpen ] = useState(false);
  const [ width ] = useWindowSize();
  const [ masonryDisplay, setMasonryDisplay ] = useState([false, false, false]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(0);
    setViewerIsOpen(false);
  };

  {/* this looks terrible, because it is. but all patterns to modify the
  options using width state do not work */}
  useEffect(() => {
    if (width > 520) {
      setMasonryDisplay([true, false, false]);
    } else if (width > 375) {
      setMasonryDisplay([false, true, false]);
    } else {
      setMasonryDisplay([false, false, true]);
    }
  }, [width]);

  return (
    <section className="PortfolioContainer">
      {
        filteredPortfolioData.length > 0 ?
        <>
          <div className="button-container">
            <FilterBtns />
          </div>
          {
            <>
            {/* this looks terrible, because it is. but all patterns to modify the
            options using width state do not work */}
              <Masonry
                className={masonryDisplay[0] ? 'masonry-on' : 'masonry-off'}
                elementType={'div'}
                options={{
                  fitWidth: true,
                  columnWidth: 300,
                  gutter: 5
                }}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
              >
                {
                  filteredPortfolioData.map((work, index) => {
                    const { _id, imageUrl, category } = work;

                    return (
                      <Work
                        key={index}
                        id={_id}
                        imageUrl={imageUrl}
                        category={category}
                        handleClick={() => openLightbox(index)}
                      />
                    )
                  })
                }
              </Masonry>
              <Masonry
                className={masonryDisplay[1] ? 'masonry-on' : 'masonry-off'}
                elementType={'div'}
                options={{
                  fitWidth: true,
                  columnWidth: 250,
                  gutter: 5
                }}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
              >
                {
                  filteredPortfolioData.map((work, index) => {
                    const { _id, imageUrl, category } = work;

                    return (
                      <Work
                        key={index}
                        id={_id}
                        imageUrl={imageUrl}
                        category={category}
                        handleClick={() => openLightbox(index)}
                      />
                    )
                  })
                }
              </Masonry>
              <Masonry
                className={masonryDisplay[2] ? 'masonry-on' : 'masonry-off'}
                elementType={'div'}
                options={{
                  fitWidth: true,
                  columnWidth: 200,
                  gutter: 5
                }}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
              >
                {
                  filteredPortfolioData.map((work, index) => {
                    const { _id, imageUrl, category } = work;

                    return (
                      <Work
                        key={index}
                        id={_id}
                        imageUrl={imageUrl}
                        category={category}
                        handleClick={() => openLightbox(index)}
                      />
                    )
                  })
                }
              </Masonry>
            </>
          }
          <ModalGateway>
            {
              viewerIsOpen ?
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImageIndex}
                  views={filteredPortfolioData.map((work) => ({
                    src: work.imageUrl
                  }))}
                />
              </Modal> : 
              null
            }
          </ModalGateway> 
        </> :
        <LoadingAnimation />
      }
    </section>
  );
}

export default PortfolioContainer;
