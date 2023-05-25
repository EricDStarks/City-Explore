function Movies (props) {
    let MoviesHTML = props.Movies.map(function(element){
        return (
            <h2>{element.title}</h2>
        )
    })
    return (<>
        {MoviesHTML}
    </>)
}

export default Movies