import { useEffect, useState } from "react";
import "./App.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

function App() {
  const [quoteList, setQuoteList] = useState([]);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuoteList(data);
      });
  }, []);
  console.log(quoteList);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * quoteList.length));
  }, [quoteList]);
  console.log("L'index est : ", index);

  useEffect(() => {
    if (quoteList && index) {
      setQuote(quoteList[index].text);
      setAuthor(quoteList[index].author);
    }
  }, [quoteList, index]);

  return (
    <div className="app">
      <div id="quote-box">
        <p id="text"></p>
        <p id="text">"{quote}"</p>
        <p id="author"> By : {author}</p>
        {/* <p id="text">{quote}</p> */}
        {/*   <p id="author"> By : {author}</p> */}
        <div className="btns-box">
          <NavigateBeforeIcon onClick={() => setIndex(index - 1)} fontSize='large' className='arrow-btns' />
          <button
          id="new-quote"
          onClick={() => setIndex(Math.floor(Math.random() * quoteList.length))}
        >
          GENERATE A RANDOM CITATION
        </button>
        <NavigateNextIcon onClick={() => setIndex(index + 1)} fontSize='large' className='arrow-btns' />
        </div>
        
        <div className="tweet-box">
          <p>Tweeter la citation</p>
          <a
            href={`https://twitter.com/intent/tweet?text=${quote}`}
            target="_blank"
            id="tweet-quote"
          >
            <TwitterIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
