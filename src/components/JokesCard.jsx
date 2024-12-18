import { useState } from 'react';

const JokesCard = () => {
  const jokesObj = {
    type: 'general',
    setup: 'What did the spaghetti say to the other spaghetti?',
    punchline: 'Pasta la vista, baby!',
    id: 150,
  };
  const [jokes, setJokes] = useState(jokesObj);

  async function getJoke() {
    const response = await fetch(
      'https://official-joke-api.appspot.com/random_joke'
    );
    const data = await response.json();
    setJokes(data);
  }

  return (
    <div>
      <div className='card'>
        {/* <div className='card-img'>
          <img src='' alt='' />
        </div> */}

        <div className='jokes-container'>
          <div className='jokes-Headline'>
            <div className='jokes-head'>
              <h3>
                <span>Generated By: </span>
                Basanta
              </h3>
            </div>
          </div>
          <div className='jokes-content'>
            <div className='jokes'>
              <p>
                "{jokes.setup}, {jokes.punchline}"
              </p>
            </div>
          </div>
          <div className='btn'>
            <div className='btn-gen'>
              <button onClick={getJoke}>Generate jokes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokesCard;
