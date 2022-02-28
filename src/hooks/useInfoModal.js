import { useState, useCallback } from 'react';

function useInfoModal(aditionalInitialValues) {
  const initialData = {
    visible: false,
    title: null,
    description: null,
    ...aditionalInitialValues,
  };
  const [infoModal, setInfoModal] = useState(initialData);

  const handleOpenModal = useCallback((values) => setInfoModal((prev) => ({ ...prev, ...values })), []);

  const handleCloseModal = useCallback(() => setInfoModal((prev) => ({ ...prev, ...initialData })), []);

  return {
    infoModal,
    handleOpenModal,
    handleCloseModal,
  };
}

export default useInfoModal;
