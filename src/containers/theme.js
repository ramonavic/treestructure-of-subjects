import React from 'react';
import TopSubject from '../components/topSubject';
import SubSubject from '../components/subSubject';

class Theme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topSubjects: this.props.topSubjects,
      subSubjects: this.props.subSubjects
    }
}

  componentDidMount() {
    let topSubjectsArray = this.state.topSubjects;
    let subSubjectsArray = this.state.subSubjects;

    console.log(topSubjectsArray.length)

    for(var i = 0; i < topSubjectsArray.length; i++) {
      for(var j = 0; j < subSubjectsArray.length; j++) {
        if (subSubjectsArray.parent_subject_id[j] == topSubjectsArrays.id[i]) {
          console.log("Addewareed", subSubjects.parent_subject.id[j])

        }
      }
    }
  }

  render() {
    let component = this

    return(
      <div>
      
      </div>
    )
  }



}
export default Theme;
