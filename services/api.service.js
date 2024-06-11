import { getKeyValue, TOKEN_DICT } from "./storage.service.js";
import axios from "axios";

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};

const getWeather = async () => {
  // const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICT.token);
  const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_DICT.token));
  const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICT.city));
  if (!token) {
    throw new Error(
      "Token is undefined. Set the token with command  -t [api_key]"
    );
  }
  if (!token) {
    throw new Error(
      "City is undefined. Set the token with command  -s [city_name]"
    );
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        units: "metric",
      },
    }
  );

  return data;
};

export { getWeather, getIcon };
