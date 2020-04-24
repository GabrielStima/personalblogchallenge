import React, { useEffect, useState } from "react";
import service from "../../services/WelcomePhrase";
import "./style.css";

const WelcomePhraseComponent = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    Promise.resolve(service.getWelcomePhrase()).then((res) => {
      setQuote(res.quote);
      setAuthor(res.author);
    });
  }, []);

  return (
    <>
      <div data-testid="welcomePhrase" className="phraseLayer">
        <div className="phraseText">
          <p>{quote}</p>
        </div>
        <div className="phraseAuthor">
          <p>{author}</p>
        </div>
      </div>
    </>
  );
};

export default WelcomePhraseComponent;
