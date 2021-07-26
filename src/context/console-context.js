import React from 'react'

const consoleContext = React.createContext({
    commands: [],
    addToCommands: ()=> {} 
})

export default consoleContext;