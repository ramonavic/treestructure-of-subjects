import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';


class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      topSubject: this.props.topSubject,
      secondSubjects: [],
      nestedItems: []
    }
}




  render() {
    let component = this;

    return(
      <div>
        <Subheader key={component.state.topSubject.props.id}> {component.state.topSubject.props.subject} </Subheader>

        <Divider/>
        </div>
      )
  }




}
export default Theme;
