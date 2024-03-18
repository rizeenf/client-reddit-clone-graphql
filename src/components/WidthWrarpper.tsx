import { Box } from "@chakra-ui/layout";
import React, { ReactNode } from "react";
import { variant } from "styled-system";

interface Props {
  variant?: "small" | "regular";
  children: ReactNode;
}

const WidthWrarpper = ({ children, variant }: Props) => {
  return (
    <Box
      mt={12}
      w={"100%"}
      maxW={variant === "regular" ? "800px" : "400px"}
      mx={"auto"}
    >
      {children}
    </Box>
  );
};

export default WidthWrarpper;
