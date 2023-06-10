import './PhoneItem.css'

import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

import { useState } from 'react'
const PhoneItem = ({ phone }) => {
  const [showSpecs, setShowSpecs] = useState(false)

  const toggleTechSpecs = () => {
    setShowSpecs((previousValue) => !previousValue)
  }

  return (
    <>
      <Card
        className='h-100'
        onClick={toggleTechSpecs}
        style={{ maxHeight: '500px' }}
      >
        {!showSpecs && (
          <>
            <Card.Img
              variant='top'
              loading='lazy'
              src={`./images/${phone.imageFileName}`}
              className='h-75 object-fit-contain'
            />
            <Card.Body>
              <Card.Title>{phone.name}</Card.Title>
              <Card.Subtitle>{phone.manufacturer}</Card.Subtitle>
              <Card.Text>{phone.price}$</Card.Text>
            </Card.Body>
          </>
        )}
        {showSpecs && (
          <>
            <Card.Body 
            className='px-3' style={{ overflowY: 'scroll' }}>
              <Card.Title>{phone.name}</Card.Title>
              <Card.Subtitle className='text-muted mb-4 pb-4 border-bottom'>
                {phone.manufacturer}
              </Card.Subtitle>
              <Card.Text style={{ overflowY: 'auto', textAlign: 'left' }}>
                <p className='mb-4 pb-4 px-3 border-bottom'>{phone.description}</p>

                <p className='d-flex justify-content-between px-3'>
                  <span className='fw-bold'>Screen size: </span>
                  {phone.screen}
                </p>
                <p className='d-flex justify-content-between px-3'>
                  <span className='fw-bold'>Processor: </span>
                  {phone.processor}
                </p>
                <p className='d-flex justify-content-between px-3'>
                  <span className='fw-bold'>RAM: </span>
                  {phone.ram} GB
                </p>
                <p className='d-flex justify-content-between px-3'>
                  <span className='fw-bold'>Color: </span>
                  {phone.color}
                </p>
                <p className='d-flex justify-content-between px-3'>
                  <span className='fw-bold'>Price: </span>
                  {phone.price} $
                </p>

                
              </Card.Text>
            </Card.Body>
          </>
        )}
      </Card>
    </>
  )
}

export default PhoneItem
