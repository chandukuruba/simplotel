import {GiHamburgerMenu} from 'react-icons/gi'
import {BsWhatsapp} from 'react-icons/bs'
import {FaShoppingCart} from 'react-icons/fa'
import {useState} from 'react'

import './App.css'

const App = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const className = isMenuVisible ? 'mobile-view' : 'desktop-view'

  const onButton = () => {
    setMenuVisible(prev => !prev)
  }

  return (
    <>
      <nav className="main-nav">
        <div className="mobile-view-nav">
          <h1 className="nav-link">Simplotel</h1>
          <button type="button" className="menu-button" onClick={onButton}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={className}>
          <a className="nav-link" href="#home">
            Home
          </a>
          <a className="nav-link" href="#order">
            Order
          </a>
          <a className="nav-link" href="#food">
            Food
          </a>
          <a className="nav-link" href="#restaurant">
            Restaurant
          </a>
          <a className="nav-link" href="#testimonials">
            Testimonials
          </a>
          <a className="nav-link" href="#contact">
            Contact Us
          </a>
          <BsWhatsapp className="nav-link icon" />
          <FaShoppingCart className="nav-link icon" />
        </div>
      </nav>
      <section className="intro-section">
        <div className="intro-content">
          <h1 className="intro-title">LOREM IPSUM</h1>
          <p className="intro-description">
            Lorem Ipsum has been the industries standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
      <section className="menu-section">
        <h1 className="section-title">Order Now</h1>
        <div className="menu-container">
          <div className="menu-item">
            <img
              alt="burger"
              className="menu-item-image"
              src="https://res-console.cloudinary.com/dijyby6dt/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/bGVzbHJ2M25ld3Jkdm52Z3llZW4=/template_primary"
            />
            <h3 className="menu-item-title">BURGER</h3>
            <p className="menu-item-description">
              Lorem ipsum has been the industries standard dummy text
            </p>
          </div>
          <div className="menu-item">
            <img
              alt="pizza"
              className="menu-item-image"
              src="https://res-console.cloudinary.com/dijyby6dt/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/c3J6cHllZmhrdXF0aWIzcHF0cnQ=/template_primary"
            />
            <h3 className="menu-item-title">PIZZA</h3>
            <p className="menu-item-description">
              Lorem ipsum has been the industries standard dummy text
            </p>
          </div>
          <div className="menu-item">
            <img
              alt="pasta"
              className="menu-item-image"
              src="https://res-console.cloudinary.com/dijyby6dt/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByZWRvbWluYW50LGNfcGFkLGhfMzAwLHdfMzAwLGZfanBnLGZsX2xvc3N5LmFueV9mb3JtYXQucHJlc2VydmVfdHJhbnNwYXJlbmN5LnByb2dyZXNzaXZl/v1/aGhnZ210YmVsdGY0b3hpMnB4dXE=/template_primary"
            />
            <h3 className="menu-item-title">PASTA</h3>
            <p className="menu-item-description">
              Lorem ipsum has been the industries standard dummy text
            </p>
          </div>
        </div>
        <button type="button" className="order-button">
          Order
        </button>
      </section>
    </>
  )
}

export default App
