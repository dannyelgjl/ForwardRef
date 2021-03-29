import React, { FormEvent, useCallback, useEffect, useRef } from 'react';
import Input from './components/Input';
import Modal, { ModalHandle } from './components/Modal';

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermRef = useRef({ value: false });
  const modalRef = useRef<ModalHandle>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    console.log(nameInputRef.current?.value);
    console.log(acceptTermRef.current.value);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermRef.current.value = !acceptTermRef.current.value;
  }, []);

  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          name='name'
          label="Nome Completo"
          ref={nameInputRef}
        />

        <button type="button" onClick={handleAcceptTerms}>Aceitar Termos</button>
        <button type="submit">Realizar Focus</button>
      </form>

      <button onClick={handleOpenModal}>Abrir modal</button>
      <Modal ref={modalRef} />
    </div>
  );
}

export default App;
