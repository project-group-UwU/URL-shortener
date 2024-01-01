
import React, { useEffect, useState } from 'react';
import './App.css';
import './githubLogo.svg';
import './index.css';

// const rootElement = document.getElementById('root');

// ReactDOM.render(<App />, rootElement);


function App() {
  const [url, setUrl] = useState({
    origin_url: '',
    prefix: ''
  });
  const [shortUrl, setShortUrl] = useState({
    short_url: ''
  });
  useEffect(() => {
    setUrl(url);
    // setShortUrl(shortUrl);
  },[url]);

  useEffect(() => {
    setShortUrl(shortUrl);
  },[shortUrl]);


  const handleUrlChange = (event) => {
    setUrl({ ...url, origin_url: event.target.value });
    console.log(url);
  }

  const handlePrefixChange =  (event) => {
    console.log(url);
    setUrl({ ...url, prefix: event.target.value });

  }

  const requestShortenUrl = async (event) => {
    console.log(event);
    event.preventDefault(); // Add this line to prevent default form submission behavior
    // Your existing code
    console.log(url);
    // await fetch(`http://localhost:4000/url/new?origin_url=${url.origin_url}`)
    // .then(res => res.json())
    // .then(data => setShortUrl({ ...shortUrl, short_url: data.short_url }));
    // console.log(shortUrl);
  } 


  return (
    <div>
      <nav className="navbar navbar-light bg-light mb-3 h1 title-text">
        <div className="container-fluid">
        <span className="navbar-brand mb-0 h2">
        <h3 className="text-left form-group d-flex justify-content-left">URL Shortner</h3></span>
        <button className='btn h2'>
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="githubLogo" id='github-logo' />
        </button>
        </div>
      </nav>
      
      <div className="container center">
        <div className="row center">
          <div className="col">
            <h3 className="text-left form-group d-flex justify-content-left">Make your URL Simple!</h3>
          </div>
        </div>

        <div className="row">
          <form className="row justify-content-center">
            <div className="col-10">
              <input
                value={url.origin_url}
                onChange={handleUrlChange}
                className="form-control border border-primary rounded-pill border-5"
                name="origin_url"
                id="origin_url"
                placeholder="Paste URL: www.mywebsite.com/" />
            </div>

            <div className="col-2">
              <button type="submit" onSubmit={requestShortenUrl} className="btn btn-primary custom-button rounded-pill">Submit</button>
            </div>
        </form>
          
        </div>

        <div className="row mt-4">
          <div className="divider"></div>
        </div>

        <div className="row mt-4">
          <div className="divider1"></div>
        </div>

        <div className="row mt-4">
          <div className="divider2"></div>
        </div>

        <div className="row mt-4">
          <div className="divider3"></div>
        </div>

        <div className="row mt-4">
          <div className="divider4"></div>
        </div>

        <div className="row">
          <div className="col">
            <h3 className="text-left">New URL is:</h3>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-10">
            <form action="shorten.php" method="post">
              <div className="form-group d-flex justify-content-center">
                <input type="url" className="btn btn-outline-warning form-control rounded-pill border-5" name="url" id="url" placeholder="yesyeil.ca/XYz" style={{ backgroundColor: 'white', color: 'orange' }} />
              </div>
            </form>
          </div>

          <div className="col-2">
            <button type="submit" className="btn btn-outline-warning text-white custom-button rounded-pill" style={{ backgroundColor: 'rgb(231, 149, 27)' }}>Copy</button>
          </div>
        </div>

        <div className="row d-flex align-items-center">
          <div className="col-5" style={{ marginTop: '40px' }}>
            <h3 className="text-center">Get your QR code</h3>
            <h3 className="text-center"> for the website:</h3>
            <button className="btn btn-primary btn-outline-warning btn-block text-white rounded-pill" style={{ backgroundColor: 'rgb(231, 149, 27)' }}>
              Get QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
