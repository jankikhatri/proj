import React, {Component} from 'react'
import AccountBalance from './AccountBalance'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>

                <h1>ABC Bank</h1>

                <div>
                    <Link to="/userProfile">User Profile</Link>
                </div>

                <div>
                    <Link to="/login">Login</Link>
                </div>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        )
    }
}

export default Home