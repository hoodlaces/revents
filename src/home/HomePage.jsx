import React from 'react';

function HomePage({ history }) {
  return (
    <div>
      <div className='ui inverted vertical masthead center aligned segment'>
        <div className='ui text container'>
          <h1 className='ui inverted stackable header'>
            <img className='logo' src='assets/wacre_logo.png' alt='logo' />
          </h1>
          <h2>For Students By Students</h2>
          <div
            onClick={() => history.push('/events')}
            className='ui huge white inverted button'
          >
            Get Started
            <i className='right arrow icon' />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        Icons made by{' '}
        <a href='http://www.freepik.com' title='Freepik'>
          Freepik
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href='http://creativecommons.org/licenses/by/3.0/'
          title='Creative Commons BY 3.0'
        >
          CC 3.0 BY
        </a>
      </div>
    </div>
  );
}

export default HomePage;
