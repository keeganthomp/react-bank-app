//React imports
import React, {Component} from 'react';
//Redux imports
import {connect} from 'react-redux';
import {selectUser} from '../actions/index.js'
import { bindActionCreators } from 'redux';
//react router imports
import { Link } from 'react-router-dom';

class UserList extends Component {
    render() {
        let users = this.props.users.map((user) => {
            return (
                <li key={user._id} className="list-group-item" onClick={() => this.props.selectUser(user._id)}>
                  <Link to={`/users/${user._id}`}>{user.name}</Link>
                </li>
            );
        });
        return (
            <div>
              <h5>Users with open accounts:</h5>
              <ul>
                {users}
              </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {users: state.users};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
