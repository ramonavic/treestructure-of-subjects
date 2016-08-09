import React from 'react';


class SecondSubject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondSubjectTitle: this.props.title
    }
  }


  render() {
    return (

      <div>
        <h3> {this.state.secondSubjectTitle}
         <input type="checkbox"/>
        </h3>

      </div>
    )
  }



}

export default SecondSubject
