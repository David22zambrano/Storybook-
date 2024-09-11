import "../Generales/tipografia.ts"
import type { Meta } from "@storybook/react";
import { FooterAction } from "@sinco/react";
import { Button, ThemeProvider, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof FooterAction> = {
  title: "Sinco React/footerAction",
  component: FooterAction,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;
export const FooterActionStory = {
  name: "FooterAction..",
  args: {
    labelChangeCounter: (
      <>
        <Typography color="text.secondary" variant="body2" display="flex">
          Cambiaste
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ fontWeight: "bold", px: "2px" }}
          >
            X
          </Typography>
          Campos de información
        </Typography>
      </>
    ),
    leftContent: <Button size="small">Action</Button>,
    rightContent: (
      <>
        <Button variant="text" size="small">
          Action
        </Button>
        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowForward fontSize="small" />}
        >
          Action
        </Button>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        code: ` <FooterAction
       labelChangeCounter={
         <Typography color="text.secondary" variant="body2" display="flex">
           Cambiaste
           <Typography
             color="text.secondary"
             variant="body2"
             sx={{ fontWeight: "bold", px: "2px" }}
           >
             X
           </Typography>
           Campos de información
         </Typography>
       }
       LeftContent={
         <>
           <Button size="small">Open drawer</Button>
         </>
       }
       RightContent={
         <>
           <Button size="small">Open drawer</Button>
           <Button size="small">Open drawer</Button>
         </>
       }
     ></FooterAction>`,
      },
    },
  },
};
