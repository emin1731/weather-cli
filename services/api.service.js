import https from "https";
import { getKeyValue, TOKEN_DICT } from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICT.token);
    if (!token) {
        throw new Error("Token is undefined. Set the token with command  -t [api_key]");
    };
    
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        q: city,
        appid: token,
        units: "metric"
    });

    return data;
};

export { getWeather };