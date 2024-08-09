  const baseurl='https://api.weatherapi.com/v1/current.json?key=90ffdf717c9e4fe8934191658242507'
  const getweather= async(city)=>{
      const response = await fetch(`${baseurl}&q=${city}&aqi=yes`)
       const data =   await response.json()
       console.log(data)
       return data
        
    
  }
  export default getweather


