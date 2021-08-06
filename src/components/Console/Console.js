import { useLocation } from 'react-router';
import ConsoleForm from './ConsoleForm';

// Importing styles
import styles from './Console.module.css'
import { GoChevronRight } from "react-icons/go";

const Console = () => {
    // Defining pathName for the console current location
    const { pathname } = useLocation();
    let consolePathText;
    switch (pathname) {
        case "/":
            consolePathText = "/home"
            break;

        case "/about":
            consolePathText = pathname
            break;

        case "/portfolio":
            consolePathText = pathname;
            break;

        case "/portfolio/personal":
            consolePathText = "/personal";
            break;
            
        case "/portfolio/commercial":
            consolePathText = "/commercial";
            break;

        case "/contacts":
            consolePathText = pathname;
            break;

        case "/skills":
            consolePathText = pathname;
            break;

        case "/commands":
            consolePathText = pathname;
            break;

        default:
            consolePathText = "/404"
            break;
    }

    return (
        <div className={styles.console}>
            <div className={`container ${styles.console__container}`}>
                <GoChevronRight className={styles.console__icon} />
                <ConsoleForm className={styles.consoleText} consolePath={consolePathText} />
            </div>
        </div>
    );
}

export default Console;
