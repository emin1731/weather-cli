#!user/bin/env node 
import { getArgs } from "./helpers/args.js";


const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);

    if (args.h) {
        // Return help
    }
    if (args.s) {
        // Return s
    }
    if (args.t) {
        // Return t
    }
    // Get weather 
};
initCLI();