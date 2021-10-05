import React from "react";
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime
class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { name } = this.props;

    return (
      <div>

        <h1 className="HeyBlue">
          Yo {name}
        </h1>
      </div>
    );
  }
}

export default App;
