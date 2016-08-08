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

      <div>
          <h2> {this.state.topSubjectTitle}
          <input type="checkbox"/>
          </h2>
      </div>
    )
  }



}

export default TopSubject
