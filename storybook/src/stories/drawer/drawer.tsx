import React, { ReactNode, useCallback, useState } from "react";
import { IconButton, Stack, Typography, Drawer, SxProps } from "@mui/material";
import { Close } from "@mui/icons-material";

export type DrawerPosition = "left" | "right";

const borderStyles: Record<
  DrawerPosition,
  { borderTopRightRadius?: string; borderTopLeftRadius?: string }
> = {
  left: { borderTopRightRadius: "0.25rem" },
  right: { borderTopLeftRadius: "0.25rem" },
};

export interface DrawerComponentProperties {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
  showActions?: boolean;
  anchor?: DrawerPosition;
  anchorActions: "flex-end" | "flex-start";
  width: string;
  open: boolean;
  onClose: () => void;
  sx?: SxProps;
  sxActions?: SxProps;
  backgroundColor?: string;
  color?: string;
  headerColor?: string;
  closeIcon?: string,
}


export const DrawerComponent = ({
  title,
  backgroundColor,
  color,
  headerColor,
  children,
  actions,
  showActions = false,
  sxActions,
  closeIcon,
  anchor = "left",
  anchorActions = "flex-end",
  width,
  open,
  onClose,
  sx,
}: DrawerComponentProperties) => {

  const [stateActions, setActionsState] = useState(showActions);

  const handleDrawerActions = useCallback(() => {
      setActionsState(true);
    }, []);

  const paperSx: SxProps = borderStyles[anchor];

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "#F0f0f099 !important",
          backdropFilter: "blur(4px)",
        },

        "& .MuiDrawer-paper": {
          width: width,
          ...paperSx,
        },
        ...sx,
      }}
    >
      <Stack height="100%">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          py={1.5}
          px={1}
          bgcolor={"primary.main" || headerColor}
        >
          <Typography color={"background.paper" || color} variant="h6">
            {title}
          </Typography>

          <IconButton onClick={onClose} size="small">
            <Close sx={{ color: "background.paper" || closeIcon }}
              fontSize="inherit" />
          </IconButton>
        </Stack>

        <Stack
          sx={{
            backgroundColor: backgroundColor,
          }}
          py={1.5}
          px={1}
          overflow="auto"
          flex={1}
          onClick={handleDrawerActions}
        >
          {children}
        </Stack>

        {stateActions && (
          <Stack
            alignItems={anchorActions}
            gap={1}
            py={1.5}
            px={1}
            bgcolor="background.default"
            sx={sxActions}
          >
            {actions}
          </Stack>
        )}
      </Stack>
    </Drawer>
  );
};
export { DrawerComponent as Drawer };
