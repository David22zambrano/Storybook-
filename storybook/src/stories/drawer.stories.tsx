/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  ThemeProvider,
  Typography,
  Box,
  TextField,
  Stack,
} from "@mui/material";

import { SincoTheme } from "../Theme";
import { Drawer } from "./drawer";
import { useCallback, useState } from "react";

const meta: Meta<typeof Drawer> = {
  title: "Sinco React/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      description: "Titulo del drawer",
      control: "text",
    },
    // open: {
    //   table: {
    //     disable: true,
    //   },
    // },
    onClose: {
      table: {
        disable: true,
      },
    },
    backgroundColor: {
      table: {
        disable: true,
      },
    },
    closeIconColor: {
      table: {
        disable: true,
      },
    },
    showActions: {
      description: "Si es `true`, las acciones se muestran fijas, de lo contrario se despliegan al hacer click en algun lugar del contenido del drawer",
      control: "radio",
      options: [true, false]
    },
    color: {
      table: {
        disable: true,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    headerColor: {
      // table: {
      //   disable: true,
      // },
    },
    children: {
      table: {
        disable: true,
      },
    },
    actions: {
      table: {
        disable: true,
      },
    },
    sxActions: {
      table: {
        disable: true,
      },
    },
    sxContent: {
      table: {
        disable: true,
      },
    },
    sxHeader: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const DrawerStory: Story = {
  name: "Sinco Drawer",
  args: {
    title: "titulo del drawer",
    width: "400px",
    showActions: true
  },
  render: (args) => {
    const [state, setState] = useState(false);
    const handleDrawerState = useCallback(() => {
      setState((prevOpen) => !prevOpen);
    }, []);

    return (
      <>
        <Button variant="contained" size="medium" color="primary" onClick={handleDrawerState}>
          Click para mostrar / Ocultar
        </Button>
        <Drawer
          {...args}
          onClose={handleDrawerState}
          open={state}
          actions={
            <Stack gap={1} flexDirection="row">
              <Button color="primary" variant="text" size="small" onClick={handleDrawerState}>
                Cerrar
              </Button>
              <Button color="primary" variant="contained" size="small" onClick={handleDrawerState}>
                Guardar
              </Button>
            </Stack>
          }
        >
          <>
            <Typography textAlign="center" variant="body2" color="text.primary">
              Contenido del drawer
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              textAlign="center"
              justifyContent="space-evenly"
              gap={1}
              pb={2}
              pt={1}
            >
              <TextField label="Nombre" variant="outlined" size="small" />
              <TextField label="Apellido" variant="outlined" size="small" />
              <TextField label="Edad" variant="outlined" size="small" type="number" />
              <TextField label="Profesion" variant="outlined" size="small" />
              <TextField label="Cargo" variant="outlined" size="small" />
              <TextField label="Especialidad" variant="outlined" size="small" />
              <TextField label="Edad" variant="outlined" size="small" type="number" />
              <TextField label="Experiencia" variant="outlined" size="small" />
            </Box>

            <Typography pt={1} textAlign="center" variant="body2" color="text.primary">
              Al hacer click se muestran las acciones
            </Typography>
          </>
        </Drawer>
      </>
    );
  },
};

// /* eslint-disable react-hooks/rules-of-hooks */
// import type { Meta, StoryObj } from "@storybook/react";
// import {
//   Button,
//   ThemeProvider,
//   Typography,
//   Box,
//   TextField,
//   Stack,
// } from "@mui/material";

// import { SincoTheme } from "../Theme";
// import { Drawer } from "./drawer";
// import { useCallback, useState } from "react";
// const meta: Meta<typeof Drawer> = {
//   title: "Sinco React/Drawer",
//   component: Drawer,
//   tags: ["autodocs"],
//   decorators: [
//     (Story) => (
//       <ThemeProvider theme={SincoTheme}>
//         <Story />
//       </ThemeProvider>
//     ),
//   ],
//   parameters: {
//     layout: "centered",
//   },
//   argTypes: {
//     // title: {
//     //   description: "Titulo del drawer",
//     //   control: "text",
//     // },
//     // open: {
//     //   description: "Si `true`, se muestra el componente."
//     // },
//     // onClose: {
//     //   description: "((event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element> | TouchEvent<Element>) => void)"
//     // },
//     // actions: {
//     //   description: "ReactNode",
//     // },
//     // anchorActions: {
//     //   description: "Determina la posicion de las acciones en eje horizontal",
//     //   control: "text"
//     // },
//     // showActions: {
//     //   description: "Si es `true` las actiones se muestran siempre fijas las acciones  "
//     // },
//   },
// };
// export default meta;

// type Story = StoryObj<typeof Drawer>;

// export const DrawerStory: Story = {
//   name: "Sinco Drawer",
//   args:{
//     title: "titulo del drawer"
//   },
//   render: (args) => {
//     const [state, setState] = useState(false);
//     const handleDrawerState = useCallback(() => {
//       setState((prevOpen) => !prevOpen);
//     }, []);

//     return (
//       <>
//         <Button variant="contained" size="medium" color="primary" onClick={handleDrawerState}>
//           Click para mostrar / Ocultar
//         </Button>
//         <Drawer
//         {...args}
//           onClose={handleDrawerState}
//           open={state}
//           width={"500px"}
//           title={"title"}
//           anchor={"left"}
//           anchorActions={"flex-end"}
//           actions={
//             <Stack gap={1} flexDirection="row">
//               <Button color="primary" variant="text" size="small" onClick={handleDrawerState}>
//                 Cerrar
//               </Button>
//               <Button color="primary" variant="contained" size="small" onClick={handleDrawerState}>
//                 Guardar
//               </Button>
//             </Stack>}
//         >
//           <>
//             <Typography textAlign="center" variant="body2" color="text.primary">
//               Contenido del drawer
//             </Typography>

//             <Box
//               display="flex"
//               flexDirection="row"
//               flexWrap="wrap"
//               textAlign="center"
//               justifyContent="space-evenly"
//               gap={1}
//               pb={2}
//               pt={1}
//             >
//               <TextField label="Nombre" variant="outlined" size="small" />
//               <TextField label="Apellido" variant="outlined" size="small" />
//               <TextField
//                 label="Edad"
//                 variant="outlined"
//                 size="small"
//                 type="number"
//               />
//               <TextField label="Profesion" variant="outlined" size="small" />
//               <TextField label="Cargo" variant="outlined" size="small" />
//               <TextField label="Especialidad" variant="outlined" size="small" />
//               <TextField
//                 label="Edad"
//                 variant="outlined"
//                 size="small"
//                 type="number"
//               />
//               <TextField label="Experiencia" variant="outlined" size="small" />
//             </Box>


//             <Typography pt={1} textAlign="center" variant="body2" color="text.primary">
//               Al hacer click se muestran las acciones
//             </Typography>

//           </>
//         </Drawer>
//       </>
//     );
//   },
// };

//   color={color}
//   width: "500px",
//   title: "Titulo",
//   anchor: "right",
//   color: "text.primary",
//   anchorActions: "flex-end",
//   children: "Contenido del drawer",
//   onClose: () => { }
// backgroundColor={backgroundColor}


// export const DrawerCustomized: Story = {
// name: "Historial de cambios 1",
//   args: {
// },
// render: () => {
//   const [state, setState] = useState(true);
//   const handleDrawerState = useCallback(() => {
//     setState((prevOpen) => !prevOpen);
//   }, []);

//   return (
//     <>
//       <Button variant="contained" size="medium" color="primary" onClick={handleDrawerState}>
//         Click para mostrar / Ocultar
//       </Button>
//       <Drawer
//         open={state}
//         onClose={handleDrawerState}

//         width={"500px"}
//         title={"title"}
//         anchor={"left"}
//         anchorActions={"flex-start"}
//         headerColor="secondary.main"
//         actions={
//           <Stack gap={1} flexDirection="row">
//             <Button color="primary" variant="text" size="small" onClick={handleDrawerState}>
//               Cerrar
//             </Button>
//             <Button color="primary" variant="contained" size="small" onClick={handleDrawerState}>
//               Guardar
//             </Button>
//           </Stack>}
//       >
//         <>
//           <Typography textAlign="center" variant="body2" color="text.primary">
//             Contenido del drawer
//           </Typography>

//           <Box
//             display="flex"
//             flexDirection="row"
//             flexWrap="wrap"
//             textAlign="center"
//             justifyContent="space-evenly"
//             gap={1}
//             pb={2}
//             pt={1}
//           >
//             <TextField label="Nombre" variant="outlined" size="small" />
//             <TextField label="Apellido" variant="outlined" size="small" />
//             <TextField
//               label="Edad"
//               variant="outlined"
//               size="small"
//               type="number"
//             />
//             <TextField label="Profesion" variant="outlined" size="small" />
//             <TextField label="Cargo" variant="outlined" size="small" />
//             <TextField label="Especialidad" variant="outlined" size="small" />
//             <TextField
//               label="Edad"
//               variant="outlined"
//               size="small"
//               type="number"
//             />
//             <TextField label="Experiencia" variant="outlined" size="small" />
//           </Box>


//           <Typography pt={1} textAlign="center" variant="body2" color="text.primary">
//             Al hacer click se muestran las acciones
//           </Typography>

//         </>
//       </Drawer>
//     </>
//   );
// },
// };