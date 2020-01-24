// This page is based on a todo app - the idea here is to add this to the Portfolio Container Reducer so that we can sort the images by category

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}
function sortImages(state = [], action) {
  switch (action.type) {
    case 'BRIDAL':
      return state.slice().sort(function(bridal, beauty, editorial) {
        return portfolioData - beauty.imageURL - editorial.imageURL;
      }
      //Is this necessary on a per-case basis?  Should the function within the portfolioPage map through the list, or should 
      // {
      //   portfolioData.map((service, index) => {
      //     const { _id, imageUrl, category } = service
      //     return (
      //       <div key={index}>
      //         <img src={imageUrl} style={{width: "300px"}} />
      //       </div>
      //     )
      // })}
      );
    case 'BEAUTY':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
          })
        }
        return todo
      })
    default:
      return state
  }
}


//Is this the better way to map?? - example taken from https://github.com/fus-marcom/ci-react/commit/903d4598daea69d052714d42f687e9ad00225284
<Masonry>
        {this.props.data.filter(post => activeTab === 'all' || activeTab === post.acf.type).map( (post, i) => (
           <div className="col s12 m12 l6 xl3" key={i}>
            <ResourceCard title={post.title.rendered} type={post.acf.type} content={post.acf.description} url={post.acf.url} price={post.acf.price} />
          </div>
        ))
        }
      </Masonry>