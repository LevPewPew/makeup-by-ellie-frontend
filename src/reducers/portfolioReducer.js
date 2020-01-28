const initialState = {
  portfolioData: null,
  sortedPortfolioData: null
};

function portfolioReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case 'UPDATE_PORTFOLIO_DATA':
      newState = { ...state, portfolioData: action.newPortfolioData };
      // console.log(newState);
      break;
    case 'BRIDAL_PORTFOLIO_DATA':
        let bridalState = {};
        bridalState = { ...state, sortedPortfolioData: action.newSortedPortfolioData };
        // console.log(bridalState);
        // return  
        const bridal = bridalState.filter(image => {
          return image.category === 'bridal';
        })
        // const bridal = bridalState.filter(bridalState => { 
        //   bridalState.category
        //   .map(newSortedPortfolioData => {
        //     return(
        //       newSortedPortfolioData.category === "bridal"
        //     );
        //   })
        //   })
          console.log(bridal)
        //   return bridal
        
        
        // .map((action, index) => {
        //           if (index.category === 'bridal') {
        //             return bridalState;
        //           }
        //           console.log(bridalState);
        //         })
      break;
    default:
      newState = { ...state };
  }
  return newState;
}



// portfolioData.dispatch({
//   type: 'BRIDAL_PORTFOLIO_DATA',
//   category
// })

export default portfolioReducer;


// function visibilityFilter(state = 'SHOW_ALL', action) {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter
//     default:
//       return state
//   }
// }
// function sortImages(state = [], action) {
//   switch (action.type) {
//     case 'BRIDAL':
//       return state.slice().sort(function(bridal, beauty, editorial) {
//         return portfolioData - beauty.imageURL - editorial.imageURL;
//       }
//       //Is this necessary on a per-case basis?  Should the function within the portfolioPage map through the list, or should 
//       // {
//       //   portfolioData.map((service, index) => {
//       //     const { _id, imageUrl, category } = service
//       //     return (
//       //       <div key={index}>
//       //         <img src={imageUrl} style={{width: "300px"}} />
//       //       </div>
//       //     )
//       // })}
//       );
//     case 'BEAUTY':
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }
