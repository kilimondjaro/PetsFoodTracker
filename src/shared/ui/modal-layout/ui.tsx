import { KeyboardAvoidingView } from 'react-native';
import { Box } from 'src/shared/ui/box';
import { Dragger } from 'src/shared/ui/dragger';

import type { ModalLayoutProps } from './types';

export const ModalLayout = ({ children, ...props }: ModalLayoutProps) => {
  return (
    <Box
      flex={1}
      paddingHorizontal="m"
      paddingVertical="m"
      backgroundColor="mainBackground"
      {...props}
    >
      <Box justifyContent="center" alignItems="center">
        <Dragger />
      </Box>
      {children}
    </Box>
  );
};
