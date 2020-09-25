import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import {Redirect, withRouter} from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)