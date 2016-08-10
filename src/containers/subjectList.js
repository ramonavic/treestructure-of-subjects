import React from 'react';
import TopSubject from '../components/topSubject';
import SecondSubject from '../components/secondSubject';
import ThirdSubject from '../components/thirdSubject'
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader'
import Checkbox from 'material-ui/Checkbox';



class SubjectList extends React.Component {
  constructor(props) {
    super();

    console.log(props);

    this.state = {
      subjects: props.subjects,

    }
  }











}


export default SubjectList;
