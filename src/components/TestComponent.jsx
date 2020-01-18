import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';
import Service from '../components/Service';

const store = createStore(rootReducer);

function TestComponent() {
  return (
    <Provider store={store}>
      <form>
        <div>
           <label htmlFor="name">Name:</label>
           <input type="text" name="name" id=""/>
        </div>
        <div>
           <label htmlFor="gender">Gender:</label>
           <select name="gender" id="">
             <option value="male">Male</option>
             <option value="female">Female</option>
           </select>
        </div>
        <div>
           <label htmlFor="phone">Phone:</label>
           <input type="text" name="phone" id=""/>
        </div>
        <div>
           <label htmlFor="address">Address:</label>
           <input type="text" name="address" id=""/>
        </div>
        <div>
           <label htmlFor="bookingDate">What date are you needing your makeup done?</label>
           <input type="text" name="bookingDate" id=""/>
        </div>
        <div>
           <label htmlFor="readyByTime">What time do you need to be ready by?</label>
           <input type="text" name="readyByTime" id=""/>
        </div>
        <div>
           <label htmlFor="category">What is your event / special occasion?</label>
           <input type="text" name="category" id=""/>
        </div>
        <button type="submit">Send Enquiry</button>
      </form>
    </Provider>
  );
}

export default TestComponent;
