import './App.css'

import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import { Routes, Route } from 'react-router-dom'
import PhonesList from './pages/PhonesList/PhonesList'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div className='App'>
      <Navigation />

      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/phones'
          element={<PhonesList />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  )
}

export default App
