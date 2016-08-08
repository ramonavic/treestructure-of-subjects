import React from 'react';
import Counter from './Counter';
import ScoreBoard from './ScoreBoard'


class App extends React.Component {
    render() {
        return (
          <div>
            <h1> Scores </h1>
            <ScoreBoard />
          </div>
        );
    }
}

export default App;
