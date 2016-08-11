import React from 'react';

class ThirdSubject extends React.Component {
  constructor(props) {
    super()
    this.state = {
      subject: props.thirdSubject
    }
  }





  render() {
    return (
      <li>
        <p> {this.state.subject} </p>

      </li>
    )

  }


}

export default ThirdSubject;
