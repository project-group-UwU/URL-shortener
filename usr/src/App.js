
import React, { useEffect, useState } from 'react';
import './App.css';
import './githubLogo.svg';
import './index.css';

// const rootElement = document.getElementById('root');

// require('dotenv').config({
//   path: process.env.NODE_ENV === "production" ? ".env.production" : ".env.development"
// });

function App() {
  const serverUri = process.env.NODE_ENV === "production" ? process.env.RAILS_APP_URI : 'http://localhost:3000';
  const [url, setUrl] = useState({
    origin_url: '',
    prefix: ''
  });

  const [shortUrl, setShortUrl] = useState({
    short_url: ''
  });

  useEffect(() => {
    setUrl(url);
  },[url]);

  useEffect(() => {
    setShortUrl(shortUrl);
  },[shortUrl]);

  const handleUrlChange = (e) => {
    setUrl({ ...url, origin_url: e.target.value });
    console.log(url);
  }

  const requestShortenUrl = async (e) => {
    // Your existing code
    console.log(serverUri);
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
      console.log(err);
    });
    console.log(shortUrl);
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
          <form className="row justify-content-center" onSubmit={e => e.preventDefault()}>
            <div className="col-10">
              <input
                onChange={handleUrlChange}
                className="form-control border border-primary rounded-pill border-5"
                name="origin_url"
                id="origin_url"
                placeholder="Paste URL: www.mywebsite.com/" />
            </div>

            <div className="col-2">
              <button type="submit" onClick={requestShortenUrl} className="btn btn-primary custom-button rounded-pill">Submit</button>
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
                <div
                  className="btn btn-outline-warning form-control rounded-pill border-5"
                  name="url"
                  id="url"
                  placeholder="yesyeil.ca/XYz"
                  style={{ backgroundColor: 'white', color: 'orange' }}
                  >
                {shortUrl.short_url}
                </div>
              </div>
            </form>
          </div>

          <div className="col-2">
            <button type="submit" className="btn btn-outline-warning text-white custom-button rounded-pill" style={{ backgroundColor: 'rgb(231, 149, 27)' }}>Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
