import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Masonry from 'react-masonry-component';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Work from '../Work/Work';
import FilterBtns from '../FilterBtns/FilterBtns';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './PortfolioContainer.scss';

function PortfolioContainer() {
  const filteredPortfolioData = useSelector((state) => state.portfolioReducer.filteredPortfolioData);
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
  const [ viewerIsOpen, setViewerIsOpen ] = useState(false);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImageIndex(0);
    setViewerIsOpen(false);
  };

  const masonryOptions = {
    fitWidth: true,
    columnWidth: 300,
    gutter: 5
  };

  return (
    <section className="PortfolioContainer">
      {
        filteredPortfolioData.length > 0 ?
        <>
          <div className="button-container">
            <FilterBtns />
          </div>
          <Masonry
            className={'grid'}
            elementType={'div'}
            options={masonryOptions}
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
