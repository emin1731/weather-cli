import chalk from "chalk";
import dedent from "dedent-js";

const printSuccess = (message) => {
  console.log(chalk.bgGreen("SUCCESS:") + " " + message);
};

const printError = (message) => {
  console.log(chalk.bgRed("ERROR:") + " " + message);
};

const printHelp = (message) => {
  console.log(dedent`
    ${chalk.bgCyan("HELP: ")}
    No params - get weather 
    -c [city] - set city 
    -h - help menu 
    -t [api_key] - set token

`);
};

export { printError, printSuccess, printHelp };
