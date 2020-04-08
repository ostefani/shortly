import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';
import Form from '../containers/Form';
import { Center, Wrapper } from './decorators';
import '../style.css';

export default {
    title: 'Form',
    component: Button,
    decorators: [withA11y],
    parameters: {
        notes: 'Form includes button, input and form stories',
    },
};

export const ButtonComponent = () => (
    <Center>
        <Button onClick={action('clicked')}>Create</Button>
    </Center>
);

export const InputComponent = () => (
    <Center>
        <Wrapper>
            <Input />
        </Wrapper>
    </Center>
);

export const LabelComponent = () => (
    <Center>
        <Wrapper>
            <Label inputId="test">Enter your name</Label>
            <Input name="test" id="test" placeholder="Your name" />
        </Wrapper>
    </Center>
);

export const InputWithError = () => (
    <Center>
        <Wrapper>
            <Label inputId="test">Enter your name</Label>
            <Input error="Invalid name" name="test" id="test" placeholder="Your name" />
        </Wrapper>
    </Center>
);

export const FormComponent = () => (
    <Center>
        <Wrapper>
            <Form title="Fill the form">
                <Label inputId="test">Enter your name</Label>
                <Input error="Invalid name" name="test" id="test" placeholder="Your name" />
                <Input name="test" id="test" placeholder="Your name" />
                <Button>Send</Button>
            </Form>
        </Wrapper>
    </Center>
)
