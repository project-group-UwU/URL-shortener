export default function Navbar() {
	function onClick() {
		window.location.href = "https://github.com/project-group-UwU/URL-shortener";
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3 h1 title-text">
			<div className="container-fluid">
				<span className="navbar-brand mb-0 h2">
					<h3 className="text-left form-group d-flex justify-content-left">
						URL Shortner
					</h3>
				</span>
				
				<button className='btn h2' onClick={onClick}>
					<img
						src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
						alt="githubLogo"
						id='github-logo'
					/>
				</button>
			</div>
		</nav>
	)
}