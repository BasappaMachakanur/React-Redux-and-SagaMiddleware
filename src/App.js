import React from 'react'
import { Provider } from 'react-redux'
import Header from './Components/Header'
import store from './redux/Store/store'

const App = () => {
  return (
    <Provider store={store}>
         <Header/>
    </Provider>
    
  )
}

export default App
