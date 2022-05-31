import Form from './Form';

export default {
  title: 'Atomic Design/Molecules/Form',
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Register = Template.bind({});
Register.args = {
  variant: 'reg',
};
