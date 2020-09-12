import React from 'react'

const posts = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const Home = () => {
	return (
		<div className="layout">
			<h3>Blog Posts</h3>
			{posts.map((post) => (
				<div className="card" key={post}>
					<h4>Post Number one</h4>
					<p>this is inside the card</p>
				</div>
			))}
		</div>
	)
}

export default Home
