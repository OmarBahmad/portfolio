import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <p className="copyright">
        Made with{' '}
        <span role="img" aria-label="thinking">
          ❤️
        </span>{' '}
        by Omar Bahmad
      </p>
      {console.log('Originally made by Matthew Jigalin. Improved by Omar Bahmad.')}
    </footer>
  )
}

export default Footer
