import React from 'react';
import {List, ListItem} from 'material-ui/List';


class SecondSubject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondSubjectTitle: this.props.primaryText,
      key: this.props.key,
      nestedItems: this.props.nestedItems
    }
    console.log(this.state)
  }


  render() {
    return (
      <div>
      <ListItem primaryText={this.state.secondSubjectTitle}/>
      </div>
    )
  }




}

export default SecondSubject
