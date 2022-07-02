import React from 'react';
import { Modal as RNModal } from 'react-native';
import { Box } from 'src/shared/ui/box';
import { ModalLayout } from 'src/shared/ui/modal-layout';

import type { ModalProps } from './types';

export const Modal = ({ children, isVisible, onClose }: ModalProps) => {
  return (
    <RNModal
      presentationStyle="pageSheet"
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <Box flex={1}>
        <ModalLayout borderTopEndRadius="l" borderTopLeftRadius="l">
          {children}
        </ModalLayout>
      </Box>
    </RNModal>
  );
};
