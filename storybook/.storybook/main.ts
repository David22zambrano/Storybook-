import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: { builder: "@storybook/builder-vite" },
  staticDirs: ["..\\public"],
};
export default config;
