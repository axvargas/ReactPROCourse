import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyLabel from "../../components/MyLabel";

export default {
  title: 'Components/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: 'select' },
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
  label: 'Basic label',
  size: 'normal',
  upperCase: false
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'All caps label',
  size: 'normal',
  upperCase: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'primary'
};

export const Terciary = Template.bind({});
Terciary.args = {
  size: 'h1',
  color: 'tertiary',
  upperCase: true
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  fontColor: '#5517ac',
  size: 'h1'
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  fontColor: 'white',
  backgroundColor: 'black',
  size: 'h1'
};
