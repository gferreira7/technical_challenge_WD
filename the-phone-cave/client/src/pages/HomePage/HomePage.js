import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import './HomePage.css'
import { useEffect, useState } from 'react'

import Loading from '../../components/Loading/Loading'

function HomePage() {
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setHasLoaded(true)
  }, [])

  return (
    <>
      {hasLoaded ? (
        <div
          className='d-flex justify-content-center align-items-center'
          style={{
            backgroundImage: `url('./images/background.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            flex: 1,
          }}
        >
          <Container className='text-light p-5 z-1'>
            <h1>Welcome to The Phone cave! </h1>
            <p
              className='m-5 px-5'
              style={{ textAlign: 'center' }}
            >
              Discover the latest smartphones from top brands such as Apple,
              Samsung, and Google. Shop with us and find the perfect phone to
              fit your lifestyle and budget. Enjoy free shipping on all orders
              and exceptional customer service. Upgrade your phone today!
            </p>
            <Button
              href='/phones'
              variant='light'
            >
              Browse the Shop
            </Button>
          </Container>
          <div className='opacity-curtain' />
        </div>
      ) : <Loading />}
    </>
  )
}

export default HomePage
