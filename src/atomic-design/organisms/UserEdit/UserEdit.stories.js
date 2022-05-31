import User from './User';

export default {
  title: 'Atomic Design/Organisms/User',
  component: User,
};

const Template = (args) => <User {...args} />;

export const Example = Template.bind({});
Example.args = {};
