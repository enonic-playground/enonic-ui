import * as React from 'react';
import Button from '../components/button';
import { Modal } from '../components/modal/Modal';

export default {
	title: 'Modules/Modal',
	component: Modal,
	argTypes: {},
};

const DivTemplate = (args) => <div {...args} />;
const ModalTemplate = (args) => <Modal {...args} />;

//@ts-ignore
Modal.Header.displayName = 'Modal.Header';
//@ts-ignore
Modal.Content.displayName = 'Modal.Content';
//@ts-ignore
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

export const DarkTheme = DivTemplate.bind({});
DarkTheme.args = {
	children: <Modal>
		<Modal.Header>Header</Modal.Header>
		<Modal.Content>Content</Modal.Content>
		<Modal.Actions>
			<Button primary>Change password</Button>
			<Button>Cancel</Button>
		</Modal.Actions>
	</Modal>,
	className: 'enonic dark-theme'
}

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
