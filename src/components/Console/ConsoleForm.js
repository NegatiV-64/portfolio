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
        if (consoleCommand.includes("goto /") && !consoleCommand.includes("List of the commands")) {
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
            setConsoleCommand("List of the commands: .help; goto /(location). /commands - list of your commands. Return: /clear ")
        }

        else if (consoleCommand === "/question") {
            consoleData.addToCommands(consoleCommand)
            setConsoleCommand("Answer to the Ultimate Question of Life, The Universe, and Everything is 42. Type /42 to exit. ")
        }

        else if (consoleCommand === "Answer to the Ultimate Question of Life, The Universe, and Everything is 42. Type /42 to exit. /42") {
            setConsoleCommand("")
        }

        else if (consoleCommand === "/commands") {
            consoleData.addToCommands(consoleCommand)
            navigate("/commands")
            setConsoleCommand("")
        }

        else if (consoleCommand === "List of the commands: .help; goto /(location). /commands - list of your commands. Return: /clear /clear") {
            consoleData.addToCommands("/clear")
            setConsoleCommand("")
        }

        else {
            navigate("/page404")
            setConsoleCommand("")
        }
    }

    function onTypeConsoleInputHandler(e) {
        setConsoleCommand(e.target.value)
    }

    let placeholderText = "";

    if (consoleData.commands.length === 0) {
        placeholderText = "*Type .help for more details"
    }

    return (
        <form onSubmit={onSendConsoleHandler} className={props.className}>
            <span>{props.consolePath}</span>
            <input placeholder={placeholderText} onChange={onTypeConsoleInputHandler} value={consoleCommand} type="text" />
        </form>
    );
}

export default ConsoleForm;
