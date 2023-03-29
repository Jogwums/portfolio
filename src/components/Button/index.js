import React from 'react'
import bootstrapUtils from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

bootstrapUtils.addStyle(Button, 'custom');

const customButtonStyle = (
  <div>
    <style type="text/css">
      {`
    .btn-custom {
        background-color: purple;
        color: white;
    }
    `}
    </style>
    <Button bsStyle="custom">Custom</Button>
  </div>
);

export default (customButtonStyle);