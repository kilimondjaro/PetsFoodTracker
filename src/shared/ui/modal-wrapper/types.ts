import type * as React from 'react';

export type ModalWrapperProps = {
  renderModalTrigger: (params: { openModal: () => void }) => React.ReactNode;
  renderModalContent: (params: { closeModal: () => void }) => React.ReactNode;
};
