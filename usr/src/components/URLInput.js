import React from 'react';
import '../styles/Input.css';

export default function URLInput({ handleUrlChange, requestShortenUrl }) {
	return (
		<>
			<div className="row center">
				<div className="col">
					<h3 className="text-left form-group d-flex justify-content-left">
						Make your URL Simple!
					</h3>
				</div>
			</div>
			<form className="input__container" onSubmit={e => e.preventDefault()}>
				<div className="input__wrapper">
					<input
						className="input__box"
						id="origin_url"
						name="origin_url"
						onChange={handleUrlChange}
						placeholder="Enter your URL here"
					/>
				</div>

				<div className="button__wrapper">
					<button
						className="input__button"
						type="submit"
						onClick={requestShortenUrl}
					>
						Submit
					</button>
				</div>
			</form>
		</>
	)
}