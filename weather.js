#!user/bin/env node 
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICT } from "./services/storage.service.js"

const saveToken = async (token) => {
    if (!token.length) {
        printError("Token have not provided");
    }
    try {
        await saveKeyValue(TOKEN_DICT.token, token);
        printSuccess("Token is saved");
    } catch (error) {
        printError(error.message);
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);
    // console.log(args);

    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // Return s
    }
    if (args.t) {
        // Return t
        saveToken(args.t);
        
    }
    // Get weather 
    getWeather("moscow");
};
initCLI();