const DUMMY_CATEGORY = 'DUMMY_CATEGORY';
const DUMMY_IMAGE_URL = 'DUMMY_IMAGE_URL';
const DUMMY_TITLE = 'DUMMY_TITLE';
const DUMMY_DESCRIPTION = 'DUMMY_DESCRIPTION';

const PORTFOLIO_DUMMY_DATA = Array.from(new Array(20), (e) => {
  return {
    category: DUMMY_CATEGORY,
    imageUrl: DUMMY_IMAGE_URL
  }
});

const SERVICES_DUMMY_DATA = Array.from(new Array(5), (e) => {
  return {
    title: DUMMY_TITLE,
    description: DUMMY_DESCRIPTION,
    imageUrl: DUMMY_IMAGE_URL
  }
});

export {
  PORTFOLIO_DUMMY_DATA,
  SERVICES_DUMMY_DATA
};
