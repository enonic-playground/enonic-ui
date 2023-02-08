import React from 'react';
import { Button } from '../components/button/Button.tsx';
import { Modal } from '../components/modal/Modal.tsx';

export default {
	title: 'Example/Modal',
	component: Modal,
	argTypes: {},
};

const ModalTemplate = (args) => <Modal {...args} />;
// const ModalHeaderTemplate = (args) => <Modal.Header {...args} />;

Modal.Header.displayName = 'Modal.Header';
Modal.Content.displayName = 'Modal.Content';
Modal.Actions.displayName = 'Modal.Actions';


export const Example = ModalTemplate.bind({});
Example.args = {
	children: [
		<Modal.Header>Header</Modal.Header>,
		<Modal.Content>Content</Modal.Content>,
		<Modal.Actions>
			<Button primary>Change password</Button>
			<Button>Cancel</Button>
		</Modal.Actions>
	],
};

export const JustHeader = ModalTemplate.bind({});
JustHeader.args = {
	children: <Modal.Header>Header</Modal.Header>
};

export const JustContent = ModalTemplate.bind({});
JustContent.args = {
	children: <Modal.Content>Content</Modal.Content>
};

export const JustActions = ModalTemplate.bind({});
JustActions.args = {
	children: <Modal.Actions>
		<Button primary>Change password</Button>
		<Button>Cancel</Button>
	</Modal.Actions>
};
