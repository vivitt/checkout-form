import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

interface IProps {
  success: boolean;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setExpiration: React.Dispatch<React.SetStateAction<string>>;
  setCvv: React.Dispatch<React.SetStateAction<string>>;
  setZipCode: React.Dispatch<React.SetStateAction<string>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccesDialog: React.FC<IProps> = ({
  name,
  success,
  setSuccess,
  setName,
  setCardNumber,
  setExpiration,
  setCvv,
  setZipCode,
}: IProps) => {
  const closeMessage = () => {
    setSuccess(false);
    setName("");
    setCardNumber("");
    setExpiration("");
    setCvv("");
    setZipCode("");
  };

  const cancelRef = React.useRef();
  return (
    <>
      <Modal isOpen={success} onClose={() => setSuccess(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Thanks for your payment, {name.toUpperCase()} !
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>Close this window to continue</ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" onClick={() => closeMessage()}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SuccesDialog;
