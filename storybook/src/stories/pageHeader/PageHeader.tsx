import { Stack, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

export interface PageheaderProperties {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  actions?: React.ReactNode;
  buttonBack?: React.ReactNode;
  fixed?: boolean;
}
export function PageHeaderWraps({
  item,
  color,
  variant,
}: {
  item: string | React.ReactNode;
  color: string;
  variant: Variant;
}) {
  if (typeof item === "string") {
    return (
      <Typography variant={variant} color={color}>
        {item}
      </Typography>
    );
  }
  return <>{item}</>;
}
export const PageHeaderComponent = ({
  title,
  subtitle,
  actions,
  buttonBack,
  fixed,
}: PageheaderProperties) => {
  return (
    <Stack
      position={fixed ? "fixed" : "relative"}
      width={fixed ? "100%" : "inherit"}
      bgcolor="background.paper"
      sx={{
        boxShadow: (theme) => theme.shadows[1],
        zIndex: 10,
      }}
    >
      <Stack
        padding="5px 24px 5px 6px"
        justifyContent="space-between"
        flexDirection="row"
        alignItems="center"
      >
        <Stack gap={1} flexDirection="row" alignItems="center">
          {buttonBack}
          <Stack>
            <Stack>
              <PageHeaderWraps color="text.primary" item={title} variant="h6" />
            </Stack>
            {subtitle && (
              <Stack alignItems="center" flexDirection="row" gap={2}>
                <PageHeaderWraps
                  color="text.secondary"
                  item={subtitle}
                  variant="caption"
                />
              </Stack>
            )}
          </Stack>
        </Stack>
        {actions && (
          <Stack gap={1} alignItems="center" flexDirection="row">
            {actions}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
export { PageHeaderComponent as PageHeader };
