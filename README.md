# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Explored why do we use redux, centralized state management, key concepts like, store, dispatch actions, handlerfunction events, explored about hooks used in redux like useReducer, useDispatch and useSelectors.
2. Explored flow of redux-toolkit, explored how to import and use redux-toolkit in react app, terms like Actions, reducer, slice, store, state. Explored functions like createReducer(), createAction(), configureStore(), createSelector().
3. Created an Increment and Decrement counter app using redux toolkit. Set up the store.js to store the state value. Wrapped up the App component in Provider to make the store available for components. Then created counterSlice function to write the logic for inc and dec. Then created the handler Events to hadle the inc and dec events. Used selector and dispatch hook to show the count and use the handle events.

Deploy link:- https://incdectoolkit.netlify.app/
Github:- https://github.com/bhushan-thinkitive-ac/redux-toolkit
