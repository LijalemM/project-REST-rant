const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1> PAGE NOT FOUND </h1>
                <p> Oopsy, sorry, we can't find this page</p>
                <div>
                    <img src='/images/lost cat.jpg' alt='lost cat on the street'/>
                    <div>
                    photo by <a href='https://unsplash.com/@reo'> Emre </a> on <a href='https://unsplash.com/collections/8688268/sub-categories'>Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )

}

module.exports = error404