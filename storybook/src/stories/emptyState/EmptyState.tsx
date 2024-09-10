import React, { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";
import emptyStateIcons from "../../assets/emptyState-icons.svg";

export type EmptyStateStates = "create" | "error" | "noResult" | "search";

export const EmptyStateImageUrls: Record<EmptyStateStates, string> = {
  create: "create",
  error: "error",
  noResult: "noResult",
  search: "search",
};

const DefaultIcon = ({
  state = "create",
  iconStyle = { width: "210px", height: "185px" },
}: Pick<EmptyStateProperties, "state" | "iconStyle">) => {
  return (
    <svg data-testid="empty-state-icon" style={iconStyle}>
      <use xlinkHref={`${emptyStateIcons}#${EmptyStateImageUrls[state]}`} />
    </svg>
  );
};

export interface EmptyStateProperties {
  icon?: ReactNode;
  state?: EmptyStateStates;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  iconStyle?: React.CSSProperties;
  containerHeight?: string;
}

export const EmptyStateComponent = ({
  state,
  title,
  subtitle,
  actions,
  containerHeight = "100%",
  iconStyle,
  icon = <DefaultIcon state={state} iconStyle={iconStyle} />,
}: EmptyStateProperties) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      padding={1}
      spacing={2}
      height={containerHeight}
      data-testid="empty-state-container"
    >
      <Stack style={iconStyle}>{icon}</Stack>
      <Stack spacing={2}>
        {title && (
          <Typography variant="h6" textAlign="center">
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body1" textAlign="center" color="text.secondary">
            {subtitle}
          </Typography>
        )}
        {actions && (
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {actions}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export { EmptyStateComponent as EmptyState };
