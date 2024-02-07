export interface IWeatherInfos {
  weatherAPI: {
    name: string
    weather: Array<{
      description: string
      icon: string
    }>
    main: {
      temp: string
      humidity: number
      feels_like: number
    }
    sys: {
      country: string
    }
  }

  flags: string

  unsplash: { imgFull: string; imgSmall: string }
}
