import React from 'react'
import {hydrate, render} from 'react-dom';
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import { Provider } from 'react-redux'

// const store = createStore(counter)
// const rootEl = document.getElementById('root')

// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//     onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//   />,
//   rootEl
// )

// render()
// store.subscribe(render)


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(counter, preloadedState)

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

