const NewsList = ({news, textInput}) => {

    const filteredNews = news.filter(element => textInput && element.title.includes(textInput));
    const allNews = news.map((element, index) => {
        return(
            <li key={index}>
                <h2>{element.title}</h2>
                <h3>{element.by}</h3>
                <br></br>
            </li>
        )
    })

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
            {textInput ? newses: allNews}
        </ul>
    )

}

export default NewsList;