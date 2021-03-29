import React, { forwardRef, useImperativeHandle, useCallback, useState } from 'react';

export interface ModalHandle {
  openModal: () => void;
}

const Modal = forwardRef<ModalHandle>((props, ref) => {
  const [visible, setVisible] = useState(true);

  const openModal = useCallback(() => {
    setVisible(true);
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  });

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  if (!visible) {
    return null;
  }
  return (
    <div>
      Modal aberto

      <button onClick={handleCloseModal}>Fechar Modal</button>
    </div>
  );
});

export default Modal;