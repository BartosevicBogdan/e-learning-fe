import Logo from './Logo';

export default {
  title: 'Atomic Design/Atoms/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Example = Template.bind({});
Example.args = {};
