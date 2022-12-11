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
// interface IProps {

// }
const PaymentCard: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiration, setExpiration] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
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
      console.log(name, cardNumber, expiration, cvv, zipCode);
    }
  };

  return (
    <Card align="center" variant="elevated" bg="white" maxW="sm">
      <CardHeader align="center">
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
        <div className={styles.full}>
          <Text mb="8px">Full Name</Text>
          <Input
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
              placeholder="1234 1234 1234 1234"
              onChange={(event) => {
                setCardNumber(event.target.value);
                setError("");
              }}
            />
            <InputRightElement
              children={<Icon as={TfiCreditCard} color="#9BADB7" />}
            />
          </InputGroup>
        </div>
        <div className={styles.group}>
          <div className={styles.half}>
            <Text mb="8px">Expiration</Text>
            <Input
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
                placeholder="123"
                type="password"
                onChange={(event) => {
                  setError("");
                  setCvv(event.target.value);
                }}
              />
              <InputRightElement
                children={<Icon as={AiFillInfoCircle} color="#9BADB7" />}
              />
            </InputGroup>
          </div>
        </div>
        <div className={styles.full}>
          <Text mb="8px">Zip Code</Text>
          <Input
            variant="outline"
            placeholder="Your zip"
            onChange={(event) => {
              setError("");
              setZipCode(event.target.value);
            }}
          />
        </div>

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
