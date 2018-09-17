import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import Landing from '/imports/pages/Landing'
import 'semantic-ui-css/semantic.min.css';


Meteor.startup(() => {
    console.log('CLIENT: LAUNCH')
    ReactDOM.render(
        <Landing color="blue"/>,
        document.getElementById('root')
    )
})

