import Footer from './Footer';

export default {
  title: 'Atomic Design/Molecules/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const example = Template.bind({});
example.args = {
  variant: 'reg',
};
