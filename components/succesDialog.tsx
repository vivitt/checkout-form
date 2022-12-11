import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { SelectionRange } from "typescript";

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
  const cancelRef = React.useRef();

  const closeMessage = () => {
    setSuccess(false);
    setName("");
    setCardNumber("");
    setExpiration("");
    setCvv("");
    setZipCode("");
  };

  return (
    <AlertDialog
      isOpen={success}
      leastDestructiveRef={cancelRef}
      onClose={() => setSuccess(false)}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Thanks for your payment, {name.toUpperCase()} !
          </AlertDialogHeader>

          <AlertDialogBody>Close this window to continue</AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={() => closeMessage()}>Close</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default SuccesDialog;
