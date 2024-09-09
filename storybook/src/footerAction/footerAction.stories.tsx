import type { Meta } from "@storybook/react";
import { SincoTheme } from "@sinco/react";
import { Button, ThemeProvider, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FooterAction } from "./footerAction";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";


const meta: Meta<typeof FooterAction> = {
  title: "Components/footerAction",
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
          endIcon={<ArrowForwardIcon fontSize="small" />}
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
