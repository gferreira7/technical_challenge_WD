import { useEffect, useState } from 'react'
import './PhonesList.css'
import axios from 'axios'
import PhoneItem from '../../components/PhoneItem/PhoneItem'
import Loading from '../../components/Loading/Loading'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function PhonesList() {
  const [allPhones, setAllPhones] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/phones`)
      .then((phonesList) => {
        setAllPhones(phonesList.data)
        setHasLoaded(true)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Container>
        {hasLoaded && <>
          <h1 className='my-5 text-uppercase'>All Phones</h1>

        <Row className='g-3'>
          {allPhones.length > 0 &&
            allPhones.map((phone) => (
              <Col
                sm={6}
                md={4}
                
                key={phone.id}
              >
                <PhoneItem phone={phone} />
              </Col>
            ))}
        </Row>
        </>}

        {!hasLoaded && <Loading />}
      </Container>
    </>
  )
}

export default PhonesList
