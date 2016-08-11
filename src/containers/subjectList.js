import React from 'react';
import Theme from '../components/theme';

class SubjectList extends React.Component {
  constructor(props) {
    super();


    this.state = {
      subjects: props.subjects,
      topSubjects: [],

    }
  }
  renderTopSubjects() {
    let component = this;
    var topSubjectArray = []

    {component.state.subjects.map(function(subject){

        if (subject.props.parent_subject_id == 0) {
          return (
          component.state.topSubjects.push(subject)
          )
        }


      }
    )}

  }

  componentWillMount() {
       this.renderTopSubjects();
     }

  render() {

    return(
      <div>
        {this.state.topSubjects.map(function(topSubject){
            return (
              <Theme key={topSubject.props.id} id={topSubject.props.id} themeSubject={topSubject.props.subject} />
            )

      })}
      </div>
    )
  }


}







export default SubjectList;
