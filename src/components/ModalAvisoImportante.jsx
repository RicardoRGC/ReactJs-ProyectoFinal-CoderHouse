import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
const ModalAvisoImportante = ({ mensaje,Close }) => {
  const { isOpen, onOpen,onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} onClose={Close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Importante</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1> {mensaje} </h1>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={ Close!=undefined? Close: onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalAvisoImportante;
