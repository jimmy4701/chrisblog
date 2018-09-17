import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'


Meteor.startup(() => {
    console.log('CLIENT: LAUNCH')
    ReactDOM.render(
        <h1>EOZIFO ZE</h1>,
        document.getElementById('root')
    )
})