var p=Object.defineProperty;var n=(e,l)=>p(e,"name",{value:l,configurable:!0});import{j as a}from"./jsx-runtime.602ee9b8.js";import"./iframe.8142a041.js";const r=n(({label:e="Example label",size:l="normal",upperCase:s=!1,color:c="primary",fontColor:i="#000000"})=>a("span",{className:`label ${l} text-${c}`,style:{color:i},children:s?e.toUpperCase():e}),"MyLabel"),t=r;try{r.displayName="MyLabel",r.__docgenInfo={description:"Label component to display text",displayName:"MyLabel",props:{label:{defaultValue:{value:"Example label"},description:"This is the text to display",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"This is the size of the text",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},upperCase:{defaultValue:{value:"false"},description:"This is whether the text should be all caps",name:"upperCase",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"This is the color of the text",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:{value:"#000000"},description:"This is the color of the text in HEX",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:r.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}const h={parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import MyLabel from "../../components/MyLabel";\r
\r
export default {\r
  title: 'Components/MyLabel',\r
  component: MyLabel,\r
  argTypes: {\r
    color: { control: 'select' },\r
    fontColor: { control: 'color' },\r
  }\r
} as ComponentMeta<typeof MyLabel>;\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />\r
\r
export const Basic = Template.bind({});\r
Basic.args = {\r
  label: 'Basic label',\r
  size: 'normal',\r
  upperCase: false\r
};\r
\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
  label: 'All caps label',\r
  size: 'normal',\r
  upperCase: true\r
};\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
  size: 'normal',\r
  color: 'primary'\r
};\r
\r
export const Terciary = Template.bind({});\r
Terciary.args = {\r
  size: 'h1',\r
  color: 'tertiary',\r
  upperCase: true\r
};\r
\r
export const CustomFontColor = Template.bind({});\r
CustomFontColor.args = {\r
  fontColor: '#5517ac',\r
  size: 'h1'\r
};\r
\r
`,locationsMap:{basic:{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},"all-caps":{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},secondary:{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},terciary:{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}},"custom-font-color":{startLoc:{col:49,line:13},endLoc:{col:80,line:13},startBody:{col:49,line:13},endBody:{col:80,line:13}}}}},title:"Components/MyLabel",component:t,argTypes:{color:{control:"select"},fontColor:{control:"color"}}},o=n(e=>a(t,{...e}),"Template"),d=o.bind({});d.args={label:"Basic label",size:"normal",upperCase:!1};const y=o.bind({});y.args={label:"All caps label",size:"normal",upperCase:!0};const m=o.bind({});m.args={size:"normal",color:"primary"};const u=o.bind({});u.args={size:"h1",color:"tertiary",upperCase:!0};const b=o.bind({});b.args={fontColor:"#5517ac",size:"h1"};const T=["Basic","AllCaps","Secondary","Terciary","CustomFontColor"];export{y as AllCaps,d as Basic,b as CustomFontColor,m as Secondary,u as Terciary,T as __namedExportsOrder,h as default};
//# sourceMappingURL=MyLabel.stories.d7bd1d80.js.map
