#!user/bin/env node 
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js"

const saveToken = async (token) => {
    try {
        await saveKeyValue("token", token);
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
};
initCLI();