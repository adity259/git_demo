import './App.css'
import { button } from './components/button.jsx'


function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      {<button>click me</button>}
      <button>click me</button>
      <button>click me</button>
      <button>click me</button>
    </div>
  )
}

export default App