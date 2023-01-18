const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1> HOME </h1>
                <div>
                <p>Short Paragraph on Restaurant
A restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same. The food is served at the table to have a comfortable visit for your meals. The restaurant offers a menu with various options for your meal, to choose from.

Restaurants provide you with different cuisines of food to satisfy your hunger.
The food preparation and presentation gives you a happy feel during your dull
The ambiance that a restaurant provides you with gives one all the more reason to visit to cherish their time.
The restaurant is a life savior when one does not feel like cooking or wants to eat something else.
You get to explore places when you plan to visit a restaurant.
The fast-food restaurant provides your meals on the go to save your time at affordable prices. </p>
<img src='/images/beyaynetu.jpg' alt='Ethiopian Sald mix'/>
<div>
    photo by <a href='https://unsplash.com/@danielcgold'> Dan Gold </a> on <a href='https://unsplash.com/collections/8688268/sub-categories'>Unsplash</a>
</div>
           </div>
                <a href='/places'>
                    <button className='btn-primary'> Places Page </button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home