import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Playground(props) {
  const [title, setTitle] = useState('');
  //const url = 'https://api.trello.com/1/boards/IamibqrO?key=8abff36e8c5249b9abd881cc1bf7afbe&token=725499b47f9d2f84325fa8091a50785b53814e1aa90f13f6879ad7b97bc7e11c';
  const url = `https://api.trello.com/1/boards/IamibqrO?key=${process.env.KEY}&token=${process.env.TOKEN}`;

  useEffect(() => {
    axios.get(url).then(res=> setTitle(res.data.desc));
    setTitle("Initialized");
  }, [url]);

  return (
    <React.Fragment>
    <div>{`PLAYGROUND ${title}`}</div>
    </React.Fragment>
  );

}

Playground.defaultProps = {};

Playground.propTypes = {};

export default Playground;