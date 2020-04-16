import React, {useEffect, useState} from "react";
import service from "../../services/WelcomePhrase";
import "./style.css";


const WelcomePhraseComponent = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(()=>{
    Promise.resolve(service.getWelcomePhrase()).then((res) => (
      setQuote(res.quote),
      setAuthor(res.author)
    ))
  }, [])

  return (
    <>
      <div className="phraseLayer">
            <div className="phraseText">{quote}</div>
            <div className="phraseAuthor">
              <span>{author}</span>
            </div>
      </div>
    </>
  );
};

export default WelcomePhraseComponent;
