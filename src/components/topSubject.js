import React from 'react';


class TopSubject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topSubjectTitle: this.props.title
    }
  }


  render() {
    return (

      <ListItem primaryText={this.state.topSubjectTitle}/>

    )
  }



}

export default TopSubject
