import Container from './Container';

export default {
  title: 'Atomic Design/Atoms/Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Example = Template.bind({});
Example.args = {};
