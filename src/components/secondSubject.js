import React from 'react';
import {List, ListItem} from 'material-ui/List';


class SecondSubject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subSubject: this.props.subSubject,
      key: this.props.key,
      nestedItems: this.props.nestedItems
    }
    console.log(this.state)
  }


  render() {
    return (
      <div>
      <SecondSubject
        key={subSubject.props.id}
        primaryText={subSubject.props.subject}
      

      />      </div>
    )
  }




}

export default SecondSubject
