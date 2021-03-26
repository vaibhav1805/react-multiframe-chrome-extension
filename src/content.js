/*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/Store';
import { Provider } from 'react-redux';
import Root from './Root';

const Main = (props) => {
  return(
    <Provider store={store}>
      <Root/>
    </Provider>
  );
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Main />, app);


chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);

function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}
