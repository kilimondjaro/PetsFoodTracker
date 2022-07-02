import type React from 'react';

export type ModalProps = {
  children: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
};
