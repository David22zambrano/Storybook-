import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      options: {
        storySort: {
          method: "alphabetical",
          order: [
            "Design System",
            ["Introducción", "*"],
            "Components",
            [

            ],
          ],
          locales: "en-US",
        },
      },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
