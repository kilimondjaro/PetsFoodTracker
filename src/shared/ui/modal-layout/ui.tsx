import { Box } from 'src/shared/ui/box';
import { Dragger } from 'src/shared/ui/dragger';

import type { ModalLayoutProps } from './types';

export const ModalLayout = ({ children }: ModalLayoutProps) => {
  return (
    <Box
      flex={1}
      paddingHorizontal="m"
      paddingVertical="m"
      backgroundColor="mainBackground"
    >
      <Box justifyContent="center" alignItems="center">
        <Dragger />
      </Box>
      {children}
    </Box>
  );
};
