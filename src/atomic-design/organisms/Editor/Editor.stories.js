import Editor from './Editor';

export default {
  title: 'Atomic Design/Organisms/Editor',
  component: Editor,
};

const Template = (args) => <Editor {...args} />;

export const editor = Template.bind({});
editor.args = {};
