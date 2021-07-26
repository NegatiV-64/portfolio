import { useState } from 'react';
import { useNavigate } from 'react-router';
import consoleContext from '../../context/console-context';
import { useContext } from 'react';


const ConsoleForm = (props) => {
    const consoleData = useContext(consoleContext);

    let navigate = useNavigate();

    const [consoleCommand, setConsoleCommand] = useState("");

    function onSendConsoleHandler(e) {
        e.preventDefault();
        if (consoleCommand.includes("goto /")) {
            let tempComsoleCommand = consoleCommand.split("goto ");
            let [, exactCommand] = tempComsoleCommand;
            if (exactCommand.includes("/back")) {
                consoleData.addToCommands(consoleCommand)
                navigate(-1)
                setConsoleCommand("")
            }
            else if (exactCommand === "/home") {
                consoleData.addToCommands(consoleCommand)
                navigate("/")
                setConsoleCommand("")
            }
            else {
                consoleData.addToCommands(consoleCommand)
                navigate(exactCommand)
                setConsoleCommand("")
            }
        }

        else if (consoleCommand === ".help") {
            consoleData.addToCommands(consoleCommand)
            setConsoleCommand("List of the commands: .help; /home; /back, /about. Return: /clear ")
        }

        else if (consoleCommand === "List of the commands: .help; /home; /back, /about. Return: /clear /clear") {
            consoleData.addToCommands("/clear")
            setConsoleCommand("")
        }

        else {
            consoleData.addToCommands(consoleCommand)
            setConsoleCommand("")
        }
    }

    function onTypeConsoleInputHandler(e) {
        setConsoleCommand(e.target.value)
    }

    return (
        <form onSubmit={onSendConsoleHandler} className={props.className}>
            <span>{props.consolePath}</span>
            <input placeholder="*Type .help for more details" onChange={onTypeConsoleInputHandler} value={consoleCommand} type="text" />
        </form>
    );
}

export default ConsoleForm;
