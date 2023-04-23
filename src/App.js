import Layout from './components/layout/Layout'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Video from './pages/Video'

const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/video/:id" element={<Video />} />
				</Routes>
			</Layout>
		</Router>
	)
}

export default App
