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
      <ListItem primaryText={this.state.secondSubjectTitle}/>

    )
  }



}

export default SecondSubject
