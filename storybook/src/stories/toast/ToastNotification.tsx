import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Stack, LinearProgress, Divider, Box, Typography, IconButton, Button, useTheme } from "@mui/material";
import { Close, InfoRounded, CheckCircleRounded, WarningRounded, ErrorRounded, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { blue, green, orange, red } from "@mui/material/colors";
import { ToastProgress } from "../Hooks";

export type ToastType = "success" | "error" | "warning" | "info";
export interface ToastBaseProperties {
  type?: ToastType;
  subtitle?: string;
  title: string;
  time?: number | any;
  dataOpt?: string[];
  actions?: React.ReactNode;
  seeMore?: boolean;
}

export const ToastNotificationComponent = (toast: ToastBaseProperties) => {
  const theme = useTheme();
  const [stateOptions, setStateOptions] = useState(true);
  const [stateToast, setStateToast] = useState(true);
  const timeProgress = toast.time || 10;
  const { progressToast } = ToastProgress(timeProgress);

  const toastColorConfig: ToastType = toast.type || "info";

  const toastIconOption: Record<ToastType, ReactElement> = {
    success: <CheckCircleRounded />,
    error: <ErrorRounded />,
    warning: <WarningRounded />,
    info: <InfoRounded />,
  };

  const ToastIconConfig = toastIconOption[toast.type || "info"];

  const closeToast = useCallback(() => {
    setStateToast(false);
  }, []);

  const toggleToastOptions = useCallback(() => {
    setStateOptions((prevShowOptions) => !prevShowOptions);
  }, [setStateOptions])

  useEffect(() => {
    progressToast <= 0 && setStateToast(false);
  }, [progressToast]);

  return (
    <>
      {stateToast && (
        <Stack
          position={"fixed"}
          zIndex={1400}
          right={16}
          top={16}
          width={370}
          sx={{
            boxShadow: (theme) => theme.shadows[8],
          }}
        >
          <Box
            padding={1.5}
            gap={1.5}
            display="flex"
            alignItems="center"
            sx={{
              backgroundColor: {
                success: green[50],
                error: red[50],
                warning: orange[50],
                info: blue[50],
              }[toastColorConfig],
            }}
          >
            <Stack
              p={1}
              gap={1}
              height={20}
              borderRadius={50}
              sx={{
                backgroundColor: {
                  success: "#8FC93A1F",
                  error: "#D143431F",
                  warning: "#FB85001F",
                  info: "#2D9FC51F",
                }[toast.type || "info"],
              }}
              className={`ripple-${toast.type || "info"}`}
            >
              <Stack
                sx={{
                  color: {
                    success: theme.palette.success.main,
                    error: theme.palette.error.main,
                    warning: theme.palette.warning.main,
                    info: theme.palette.info.main,
                  }[toast.type || "info"],
                }}
                className={`icon-color color-${toast.type || "info"}`}
              >
                {ToastIconConfig}
              </Stack>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack width={285}>
              <Stack
                justifyContent="space-between"
                flexDirection="row"
                alignItems="center"
              >
                <Typography variant="subtitle2" color="text.primary">
                  {toast.title}
                </Typography>
                <IconButton size="small" onClick={closeToast}>
                  <Close fontSize="small" />
                </IconButton>
              </Stack>
              <Stack gap={0.5}>
                <Typography color="text.primary" variant="body2">
                  {toast.subtitle}
                </Typography>
                {!stateOptions && toast.dataOpt && toast.dataOpt.length > 0 && (
                  <Stack>
                    {toast.dataOpt.map((element, i) => (
                      <Typography variant="caption" key={i}>
                        • {element}
                      </Typography>
                    ))}
                  </Stack>
                )}
              </Stack>
              <Stack justifyContent="flex-end" flexDirection="row">
                {toast.actions && (
                  <Stack flexDirection="row" gap={1}>
                    {toast.actions}
                  </Stack>
                )}
                {toast.seeMore && (
                  <Button
                    onClick={toggleToastOptions}
                    size="small"
                    variant="text"
                    color={toastColorConfig}
                  >
                    {stateOptions ? "Ver más" : "Ver menos"}
                    {stateOptions ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                  </Button>
                )}
              </Stack>
            </Stack>
          </Box>
          <LinearProgress
            sx={{
              ".MuiLinearProgress-bar": {
                transition: "0.1s linear !important",
              },
            }}
            color={toastColorConfig}
            variant="determinate"
            value={progressToast}
          />
        </Stack>
      )}
    </>
  );
};

export { ToastNotificationComponent as ToastNotification };
