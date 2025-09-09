
"use client";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export function ModalConfirm() {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}></Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup classname="dark:bg-gray-800">
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Confirme que deseja reabrir este chamado.
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={() => setOpenModal(false)}>
                Sim, tenho certeza
              </Button>
              <Button color="alternative" onClick={() => setOpenModal(false)}>
                Não, cancelar
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
