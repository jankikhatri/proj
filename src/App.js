import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './components/Home'
import LogIn from './components/LogIn'
import UserProfile from './components/UserProfile'

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: {
        userName: 'janki',
        memberSince: 2020
      },
      debits:[],
      credits:[]
    }
  }

  calculateAccountBalance = () => {
    const totalCredits = this
        .state
        .credits
        .reduce((totalCredits, credit) => {
          return totalCredits + credit.amount
        }, 0)

    const totalDebits = this
        .state
        .debits
        .reduce((totalDebits, debit) => {
          return totalDebits + debit.amount
        }, 0)

    return totalCredits - totalDebits
  };

  mockLogIn = (logInInfo) => {
    const newUser = {
      ...this.state.currentUser
    }
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }


  render() {
    const accountBalance = this.calculateAccountBalance()

    const HomeComponent = () => (<Home accountBalance={accountBalance} {...this.props}/>)
    const LogInComponent = () => (<LogIn
        user={this.state.currentUser}
        mockLogIn={this.mockLogIn}
        {...this.props}/>)
    const UserProfileComponent = () => (<UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
        {...this.props}/>)

    return (
        <Router>
          <div>
            <div>
              <Link to="/">Home</Link>
              <Link to="/login">Log In</Link>
            </div>
            <Switch>
              <Route exact path="/" render={HomeComponent}/>
              <Route exact path="/login" render={LogInComponent}/>
              <Route exact path="/userProfile" render={UserProfileComponent}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App