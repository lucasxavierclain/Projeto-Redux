import React from 'react'
import { Provider } from "react-redux";
import store from './store'
import Sidebar from './components/Sidebar'
import Video from './components/Video'


const App = () => {
  return (
    <div className="container">
      <Provider store={store}>
        <Video />
        <Sidebar />

      </Provider>
    </div>
  )
}

export default App
