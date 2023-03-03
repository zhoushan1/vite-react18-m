import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routeList from './router'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(({ path, element, ...rest }) => {
          return <Route key={path} path={path} element={element} {...rest} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
