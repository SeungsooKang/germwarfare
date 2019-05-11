import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class Profile extends React.Component {
	render() {
		return (
			<div>
				<Button id="Popover" color="secondary">
         			Profile
      			</Button>
				<UncontrolledPopover trigger="click" placement="bottom" target="Popover">
					<PopoverHeader>John Kang</PopoverHeader>
					<PopoverBody>Email: seungsoo@sheridancollege.ca <br/> Program: Software Development</PopoverBody>
				</UncontrolledPopover>
			</div>
		);
	}
}