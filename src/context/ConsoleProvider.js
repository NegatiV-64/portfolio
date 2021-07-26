import React, { useState } from 'react';

import consoleContext from './console-context';

const ConsoleProvider = (props) => {

    // const consoleData = useContext(consoleContext);
    const [commands, setCommands] = useState([]);

    function addToCommandsArrayHandler(data) {
        setCommands(commands.concat(data))
    }

    const consoleValue = {
        commands: commands,
        addToCommands: addToCommandsArrayHandler
    }

    return (
        <consoleContext.Provider value={consoleValue}>
            {props.children}
        </consoleContext.Provider>
    );
}

export default ConsoleProvider;
