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

        <ListItem primaryText={this.state.thirdSubjectTitle}/>

    )
  }



}

export default ThirdSubject
