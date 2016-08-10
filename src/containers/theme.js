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



  render() {
    let component = this

    return(
      <div>

      </div>
    )
  }



}
export default Theme;
