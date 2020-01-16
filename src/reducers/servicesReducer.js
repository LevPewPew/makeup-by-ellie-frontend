// DUMMY remove later
const dummyData = [
  {
    "_id": "5e1e27590a9dee300d8c85d8",
    "title": "editorial",
    "description": "test",
    "imageUrl": "test",
    "createdAt": "2020-01-14T20:40:57.092Z",
    "updatedAt": "2020-01-14T20:40:57.092Z",
    "__v": 0
  },
  {
    "_id": "5e1e27590a9dee300d8c85d8",
    "title": "editorial",
    "description": "test",
    "imageUrl": "test",
    "createdAt": "2020-01-14T20:40:57.092Z",
    "updatedAt": "2020-01-14T20:40:57.092Z",
    "__v": 0
  },
  {
    "_id": "5e1e27590a9dee300d8c85d8",
    "title": "editorial",
    "description": "test",
    "imageUrl": "test",
    "createdAt": "2020-01-14T20:40:57.092Z",
    "updatedAt": "2020-01-14T20:40:57.092Z",
    "__v": 0
  }
]

const initialState = {
  servicesData: dummyData
};

function servicesReducer(state = initialState, action) {
  let newState = {};

  switch(action.type) {
    case 'UPDATE_SERVICES_DATA':
      newState = {...state, servicesData: action.newServicesData};
      break;
    default:
      newState = {...state};
  }

  return newState;
}

export default servicesReducer;
