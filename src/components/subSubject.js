import React from 'react';


class SubSubject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subSubjectTitle: this.props.title
    }
  }


  render() {
    console.log(this.state)
    return (

      <div>
        <h3> {this.state.subSubjectTitle}
         <input type="checkbox"/>
      </h3>

      </div>
    )
  }



}

export default SubSubject
