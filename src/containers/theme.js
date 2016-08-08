import React from 'react';
import TopSubject from '../components/topSubject';
import SubSubject from '../components/subSubject';

class Theme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topSubjectTitle: this.props.topSubjectTitle,
      topSubjectID: this.props.topSubjectID,
      subSubjectTitle: this.props.subSubjectTitle,
      subSubjectID: this.props.subSubjectID,

      themeSubjects: []

  }





  render() {
    let subjects = (this.state.subjects)
    console.log(subjects)

    return(

      <div>

      </div>
    )
  }




}


export default Theme;
