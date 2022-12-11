import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Image from "next/image";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { TfiCreditCard } from "react-icons/tfi";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { useState } from "react";
import styles from "../styles/Card.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { validCardNumber } from "../validation/validation";

interface IProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  expiration: string;
  setExpiration: React.Dispatch<React.SetStateAction<string>>;
  cvv: string;
  setCvv: React.Dispatch<React.SetStateAction<string>>;
  zipCode: string;
  setZipCode: React.Dispatch<React.SetStateAction<string>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}
const PaymentCard: React.FC<IProps> = ({
  name,
  setName,
  cardNumber,
  setCardNumber,
  expiration,
  setExpiration,
  cvv,
  setCvv,
  zipCode,
  setZipCode,
  setSuccess,
}: IProps) => {
  const [error, setError] = useState<string>("");

  const submit = () => {
    if (
      name === "" ||
      cardNumber === "" ||
      expiration === "" ||
      cvv === "" ||
      zipCode === ""
    ) {
      setError("Please fill in all the fields");
    } else {
      if (!validCardNumber(cardNumber)) {
        setError("Please enter a valid card number");
      } else {
        setSuccess(true);
      }
    }
  };

  return (
    <Card align="center" variant="elevated" bg="white" maxW="sm">
      <CardHeader>
        <div className={styles.alert}>
          {error !== "" ? (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          ) : (
            <></>
          )}
        </div>
        <Image
          src="/logo.png"
          alt="Happy face with a red hat and blue glasses"
          width={150}
          height={150}
        />
        <Heading size="md">Payment info</Heading>
      </CardHeader>

      <CardBody>
        <form>
          <div className={styles.full}>
            <Text mb="8px">Full Name</Text>
            <Input
              value={name}
              variant="outline"
              placeholder="Your name"
              onChange={(event) => {
                setError("");
                setName(event.target.value);
              }}
            />
          </div>
          <div className={styles.full}>
            <Text mb="8px">Card Number</Text>
            <InputGroup>
              <Input
                value={cardNumber}
                pattern=""
                placeholder="1234 1234 1234 1234"
                onChange={(event) => {
                  setCardNumber(event.target.value);
                  setError("");
                }}
              />
              <InputRightElement>
                <Icon as={TfiCreditCard} color="#9BADB7" />
              </InputRightElement>
            </InputGroup>
          </div>
          <div className={styles.group}>
            <div className={styles.half}>
              <Text mb="8px">Expiration</Text>
              <Input
                value={expiration}
                placeholder="MM / YY"
                onChange={(event) => {
                  setError("");
                  setExpiration(event.target.value);
                }}
              />
            </div>
            <div className={styles.half}>
              <Text mb="8px">CVV</Text>
              <InputGroup>
                <Input
                  value={cvv}
                  placeholder="123"
                  type="password"
                  pattern="(?=.*\d).{3,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  onChange={(event) => {
                    setError("");
                    setCvv(event.target.value);
                  }}
                />
                <InputRightElement>
                  <Icon as={AiFillInfoCircle} color="#9BADB7" />
                </InputRightElement>
              </InputGroup>
            </div>
          </div>
          <div className={styles.full}>
            <Text mb="8px">Zip Code</Text>
            <Input
              value={zipCode}
              variant="outline"
              placeholder="Your zip"
              onChange={(event) => {
                setError("");
                setZipCode(event.target.value);
              }}
            />
          </div>
        </form>
        <div className={styles.btn}>
          <Button colorScheme="purple" width="100%" onClick={submit}>
            <div className={styles.btn__content}>
              <span>
                <Icon as={IoMdLock}></Icon>
              </span>
              Confirm Payment
            </div>
          </Button>
        </div>
        <Text color="#9BADB7" align="center" padding="0 0 1rem 0">
          You verify that this info is correct
        </Text>
      </CardBody>
    </Card>
  );
};

export default PaymentCard;
