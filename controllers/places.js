const router = require('express').Router()

router.get('/',(req,res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/cafeplace.jpg'
      },
      {
        name: 'Jebena Buna',
        city: 'San Deigo',
        state: 'CA',
        cuisines: 'Ethiopia, Ethiopian',
        pic: '/images/ethiopiancafe.jpg'
      },
      {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffeebar.jpg'
      }]

    res.render('places/index', {places})
})

module.exports = router
