const router = require('express').Router()
const phonesList = require('../data/phones.json')

router.get('/', (req, res, next) => {
  res.status(200).json('Home Page OK')
})

router.get('/phones', async (req, res, next) => {
  res.json(phonesList)
})
router.get('/phones/:id', async (req, res, next) => {
  const { id } = req.params

  const foundPhone = phonesList.find((phone) => {
    console.log(typeof phone.id, typeof id)
    return phone.id.toString() === id
  })

  if (!foundPhone) {
    return res.status(404).json({ error: 'Phone not found' })
  }
  
  res.json(foundPhone)
})

module.exports = router
