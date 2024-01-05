import React, { useState, useEffect } from 'react';
import '../styles/Output.css';

export default function URLOutput({ shortUrl }) {

	const [showAlert, setShowAlert] = useState('');

	useEffect(() => {
		let timer;
		if (showAlert) {
			timer = setTimeout(() => {
				setShowAlert(false);
			}, 2000);
		}

		return () => clearTimeout(timer);
	}, [showAlert]);

	function copyOnClick(e) {
		e.preventDefault();
		navigator.clipboard.writeText(shortUrl.short_url).then(() => {
			setShowAlert(true);
		}).catch(err => {
			setShowAlert(false);
		});
	}

	return (
		<>
			<div className="row">
				<div className="col">
					<h3 className="text-left">
						The new URL is:
					</h3>
				</div>
			</div>
			<div className="output__container">
				<div className="output__wrapper">
					<div className="output__box">
						{shortUrl.short_url}
					</div>
				</div>

				<div className="button__wrapper">
					<button
						type="submit"
						className="copy__button"
						onClick={copyOnClick}
					>
						Copy
					</button>
				</div>
			</div>
			{
				showAlert &&
				<div className="copy__message">
					Shorten URL Copied!
				</div>
			}
		</>
	)
}