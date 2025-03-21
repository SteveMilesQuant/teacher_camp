import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const BodyContainer = ({ children }: Props) => {
  if (!children) return null;
  return (
    <Box paddingX={8} paddingY={10} w="full">
      {children}
    </Box>
  );
};

export default BodyContainer;
