import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import CheckoutPage from './pages/checkout/CheckoutPage'
import Orders from './pages/OrdersPage'
import NotFoundPage from './pages/NotFoundPage'
import TrackingPage from './pages/TrackingPage'
import './App.css'

function App() {

  return (
	<Routes>
		<Route path='/' element={<HomePage />} />
		<Route path='checkout' element={<CheckoutPage />} />
		<Route path='orders' element={<Orders />} />
		<Route path='tracking' element={<TrackingPage />} />
		<Route path='*' element={<NotFoundPage />} />
	</Routes>
  )
}

export default App
