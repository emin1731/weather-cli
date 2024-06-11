#!user/bin/env node
import { getArgs } from "./helpers/args.js";
import { getIcon, getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICT } from "./services/storage.service.js";
import chalk from "chalk";
import dedent from "dedent-js";

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
};

const saveCity = async (city) => {
  if (!city.length) {
    printError("City have not provided");
  }

  try {
    await saveKeyValue(TOKEN_DICT.city, city);
    printSuccess("City is saved");
  } catch (error) {
    printError(error.message);
  }
};

const getForcast = async () => {
  try {
    const weather = await getWeather();
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (e) {
    if (e?.response?.status == 404) {
      printError("Неверно указан город");
    } else if (e?.response?.status == 401) {
      printError("Неверно указан токен");
    } else {
      printError(e.message);
    }
  }
};

const printWeather = (data, icon) => {
  console.log(dedent`
        ${chalk.bgGreen(`Weather in ${data.name}`)}
        ${icon}  ${data.weather[0].description}
        Temperature: ${data.main.temp}
        Feels like: ${data.main.feels_like}
        Humidity: ${data.main.humidity}
        Wind speed: ${data.wind.speed}
        `);
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
    return;
  }
  if (args.c) {
    saveCity(args.c);
    return;
  }
  if (args.t) {
    saveToken(args.t);
    return;
  }

  getForcast();
};
initCLI();
