import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatedRoutes, RouteTransition } from './AnimatedRoutes'

import './App.css'

import Home from './Home'
import About from './About'
import Header from './Header'
import Contact from './Contact'

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<AnimatedRoutes>
					<RouteTransition exact path="/">
						<Home />
					</RouteTransition>
					<RouteTransition path="/about">
						<About />
					</RouteTransition>
					<RouteTransition path="/contact">
						<Contact />
					</RouteTransition>
				</AnimatedRoutes>
			</div>
		</Router>
	)
}

export default App;
