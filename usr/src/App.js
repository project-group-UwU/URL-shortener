
import React, { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/Output.css';
import './githubLogo.svg';
import './index.css';
import Dividers from './components/Divider';
import URLInput from './components/URLInput';
import URLOutput from './components/URLOutput';
import Navbar from './components/Navbar';

// require('dotenv').config({
//   path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.development"
// });

function App() {
	const serverUri = process.env.NODE_ENV === "production" ? "https://url.yesyeil.ca/" : 'http://localhost:3000';
	const [url, setUrl] = useState({
		origin_url: '',
		prefix: ''
	});

	const [shortUrl, setShortUrl] = useState({
		short_url: ''
	});

	useEffect(() => {
		setUrl(url);
	}, [url]);

	useEffect(() => {
		setShortUrl(shortUrl);
	}, [shortUrl]);

	const handleUrlChange = (e) => {
		setUrl({ ...url, origin_url: e.target.value });
		console.log(url);
	}

	const requestShortenUrl = async (e) => {
		await fetch(`${serverUri}/url`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(url)
		})
		.then(res => {
			const data = res.json();

			if (!res.ok) {
				throw new Error('Failed to fetch.');
			}
			return data;
		})
		.then(resData => { setShortUrl({ short_url: resData.shorten_url }) })
		.catch(err => {
			// TODO: Add error handling
			console.log(err);
		});
	}

	return (
		<>
			<Navbar />
			<div className="container center">
				<URLInput handleUrlChange={handleUrlChange} requestShortenUrl={requestShortenUrl}/>
				<Dividers />
				<URLOutput shortUrl={shortUrl} />
			</div>
		</>
	);
}

export default App;
