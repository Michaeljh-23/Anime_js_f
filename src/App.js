import React from "react";
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      control: null,
      progress: 0,
      currentTime: 0,
      duration: 0
    }
  }

  render() {
    const { name } = this.props;
    const {control, progress, currentTime, duration} = this.state;
    return (
      <div>
        <Anime control={control}
          {...this.setState({control: control})}
          animeConfig={{autoplay: false, duration: 1500, easing: "easeInOutSine"}}
          initial={{target: "heyBlue", translateY: 1000}}
        >
        <h1 className="HeyBlue">
          Hey {name}
        </h1>
      </Anime>
      </div>
    );
  }
}

export default App;
