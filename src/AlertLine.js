import React from 'react';
import { Alert } from 'reactstrap';

class AlerLine extends React.Component {

    render(){
        return (
			<div>
				<Alert color="warning">
        			{this.props.textline}
      			</Alert>
			</div>
		)
	}
}
  
export default AlerLine;
