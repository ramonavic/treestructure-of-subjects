import React from 'react';


class ThirdSubject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thirdSubjectTitle: this.props.title
    }
  }


  render() {
    return (

      <div>
        <h4> {this.state.thirdSubjectTitle}
         <input type="checkbox"/>
        </h4>

      </div>
    )
  }



}

export default ThirdSubject
