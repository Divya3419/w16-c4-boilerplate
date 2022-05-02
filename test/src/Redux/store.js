// create store here

// import { legancy_createStore as createStore,compose,applyMiddleware } from "redux";

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

//     const middleware=()=>{

//     }
//     const enhancer = composeEnhancers(
//       applyMiddleware(...middleware),
//       // other store enhancers if any
//     );

export const store = {};

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
