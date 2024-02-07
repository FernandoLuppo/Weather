export const chosenIcon = (currentIcon: string): string => {
  const chosenIcon: Record<string, string> = {
    "01n": "/icons/sun-weather.svg",
    "01d": "/icons/sun-weather.svg",
    "02n": "/icons/sun-cloud.svg",
    "02d": "/icons/sun-cloud.svg",
    "03n": "/icons/cloud.svg",
    "03d": "/icons/cloud.svg",
    "04n": "/icons/clouds.svg",
    "04d": "/icons/clouds.svg",
    "09n": "/icons/rain.svg",
    "09d": "/icons/rain.svg",
    "10n": "/icons/rain-sun.svg",
    "10d": "/icons/rain-sun.svg",
    "11n": "/icons/thunder.svg",
    "11d": "/icons/thunder.svg",
    "13n": "/icons/snow.svg",
    "13d": "/icons/snow.svg",
    "50n": "/icons/fog.svg",
    "50d": "/icons/fog.svg"
  }

  return chosenIcon[currentIcon]
}
