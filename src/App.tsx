import { Provider } from 'react-redux'
import './App.css'
import { Post } from './Pages'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Post />
      </div>
    </Provider>
  )
}

export default App
