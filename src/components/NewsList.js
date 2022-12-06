const NewsList = ({news, textInput}) => {

    const filteredNews = news.filter(element => textInput && textInput in element.title === true);


    const newses = filteredNews.map((element, index) => {
        return(
            <li key={index}>
                <h2>{element.title}</h2>
                <h3>{element.by}</h3>
                <br></br>
            </li>
        )
    })

    

    return (
        <ul>
            {newses}
        </ul>
    )

}

export default NewsList;