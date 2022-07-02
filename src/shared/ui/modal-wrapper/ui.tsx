import * as React from 'react';
import { useBooleanState } from 'src/shared/lib/useBooleanState';
import { Modal } from 'src/shared/ui/modal';

import type { ModalWrapperProps } from './types';

export function ModalWrapper(props: ModalWrapperProps) {
  const { renderModalTrigger, renderModalContent } = props;
  const [isModalVisible, openModal, closeModal] = useBooleanState(false);

  return (
    <>
      {renderModalTrigger({ openModal })}
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        {renderModalContent({ closeModal })}
      </Modal>
    </>
  );
}
