/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withdrawFunds } from "../actions/index";

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Withdraw
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Withdraw</ModalHeader>
          <ModalBody>
            How Much? You Currently Have: {this.props.account.balance}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=> {this.props.withdrawFunds(5)}}>$5</Button>{' '}
            <Button color="secondary" onClick={()=> {this.props.withdrawFunds(10)}}>$10</Button>{' '}
            <Button color="success" onClick={()=> {this.props.withdrawFunds(20)}}>$20</Button>{' '}
            <Button color="info" onClick={()=> {this.props.withdrawFunds(50)}}>$50</Button>{' '}
            <Button color="danger" onClick={()=> {this.props.withdrawFunds(100)}}>$100</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.selectedAccount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      withdrawFunds: withdrawFunds
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
