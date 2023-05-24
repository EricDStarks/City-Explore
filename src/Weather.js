
function Weather(props) {
    let WeatherHTML = props.Weather.map(function (element) {
        return (
            <h1>{element.description}</h1>
        )
    })
    return (<>
        {WeatherHTML}
    </>)
}

export default Weather