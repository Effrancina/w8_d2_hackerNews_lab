import NewsList from "../components/NewsList";
import {useState, useEffect} from 'react'

const MainContainer = () => {

    // const [title, setTitle] = useState([])
    // const [text, setText] = useState([])
    const [textInput, setTextInput] = useState('')
    const [news, setNews] = useState([])

    useEffect(() => {
        
        let storiesPromise;
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => {
            const top20Stories = data.slice(0, 20);
            storiesPromise = top20Stories.map((element) => {
                return fetch('https://hacker-news.firebaseio.com/v0/item/'+ element +'.json').then(res => res.json())
            })

            Promise.all(storiesPromise)
                .then(data => {
                    setNews(data);
                    console.log(data);
                })
        })  
    }, [])

    const handleTextInput = (event) => {
        setTextInput(event.target.value)
    }

    return(
        <>
        <input value={textInput} onChange={handleTextInput}></input>
        <NewsList news={news} textInput={textInput}/>
        </>
    )
}

export default MainContainer;