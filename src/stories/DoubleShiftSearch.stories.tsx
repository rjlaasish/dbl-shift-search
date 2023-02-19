import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DoubleShiftSearch } from "../lib/index";
import { IDoubleShiftSearchProps } from "lib/DoubleShiftSearch";

export default {
  title: "Example/Double Shift Search",
  component: DoubleShiftSearch,
  argTypes: {},
} as ComponentMeta<typeof DoubleShiftSearch>;

const Template: ComponentStory<typeof DoubleShiftSearch> = (args: IDoubleShiftSearchProps) => (
  <DoubleShiftSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
