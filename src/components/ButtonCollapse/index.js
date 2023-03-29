import React from 'react'
import bootstrapUtils, { Collapse } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Well from 'react-bootstrap'

bootstrapUtils.addStyle(Button, 'custom');

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          click
        </Button>
       
        <Collapse in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Example;