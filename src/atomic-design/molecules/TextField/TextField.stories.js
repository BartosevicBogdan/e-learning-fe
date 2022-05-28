import TextField from "./TextField";

export default {
  title: 'Atomic Design/Molecules/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Text = Template.bind({});
Text.args = {
    label: 'First name:',
    type: 'text',
    placeholder: 'First name'
};

export const Password = Template.bind({});
Password.args = {
    label: 'Password:',
    type: 'password',
    placeholder: 'Password'
};
