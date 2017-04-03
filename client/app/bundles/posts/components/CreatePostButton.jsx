import React, { PropTypes, Component } from 'react';
import { Popover, Tooltip, Modal, Button, OverlayTrigger, ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

export default class CreatePostButton extends React.Component {

  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  handleChange = (e) => {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <Button onClick={this.open} bsStyle="success">Create Post</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Write Something!</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <form onSubmit={this.handleSubmit}>
              <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
              <FormGroup controlId="formBasicText">
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  type="text"
                  name="title"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <ControlLabel>Body</ControlLabel>
                <FormControl
                  name="body"
                  componentClass="textarea"
                  bsSize="large"
                  value={this.state.value}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>Markdown Enabled!</HelpBlock>
              </FormGroup>

              <Button type="submit">
                Submit
              </Button>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

CreatePostButton.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired
}