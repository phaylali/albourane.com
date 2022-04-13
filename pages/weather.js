import { useState } from 'react'
import axios from 'axios'
export default function Home() {
  const [temp, setTemp] = useState(null)
  const [minTemp, setMinTemp] = useState('')
  const [maxTemp, setMaxTemp] = useState('')
  const [humidity, setHumidity] = useState('')
  const [err, setErr] = useState(false)
  /**
   *
   * fetch weather information of the given city
   */
  const getWeather = () => {
    // resetting states
    setErr(false)
    setTemp(null)
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: { q: `Oued laou,ma`, units: 'metric' },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
      },
    }
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        const { data } = response
        const newTemp = Math.ceil(data.main.temp)
        const newMinTemp = Math.ceil(data.main.temp_min)
        const newMaxTemp = Math.ceil(data.main.temp_max)
        const humidity = Math.ceil(data.main.humidity)
        setTemp(newTemp)
        setMinTemp(newMinTemp)
        setMaxTemp(newMaxTemp)
        setHumidity(humidity)
      })
      .catch(function (error) {
        console.error(error)
        setErr(true)
      })
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div>
        <h2 className="font-raleway mb-10 text-5xl font-extrabold sm:text-4xl">
          النشرة الجوية بوادي لو
        </h2>
      </div>
      <div className="flex sm:flex-col">
        <button
          onClick={getWeather}
          className="font-raleway rounded-sm border-none bg-indigo-300 px-12 py-2 font-bold text-gray-700 outline-none transition duration-300 hover:bg-indigo-600 hover:text-white"
        >
          أظهر النشرة الجوية
        </button>
      </div>
      {temp && (
        <div className="font-raleway mt-10 flex flex-col justify-start rounded bg-indigo-200 px-12 py-4 text-xl font-semibold text-gray-700 sm:px-8 sm:text-base">
          <div className="mb-4 flex">
            <p className="sm:w-41 w-64">الحرارة:</p>
            <p>{temp} ° C</p>
          </div>
          <div className="sm:w-41 mb-4 flex">
            <p className="w-64">الحرارة الدنيا:</p>
            <p>{minTemp}° C</p>
          </div>
          <div className="flex">
            <p className="sm:w-41 w-64">الحرارة القسوى:</p>
            <p>{maxTemp}° C</p>
          </div>
          <div className="flex">
            <p className="sm:w-41 w-64">الرطوبة:</p>
            <p>{humidity}</p>
          </div>
        </div>
      )}
      {err && (
        <div className="font-raleway mt-10 rounded bg-red-200 px-12 py-4 text-xl font-semibold text-gray-700 sm:px-8 sm:text-base">
          <p>Couldn't fetch weather results.</p>
        </div>
      )}
    </div>
  )
}
