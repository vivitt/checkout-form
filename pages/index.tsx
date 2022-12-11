import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PaymentCard from "../components/card";
import SuccesDialog from "../components/succesDialog";
import { Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiration, setExpiration] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout Form</title>
        <meta name="description" content="Talent Squad | Frontend III" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.dialog}>
          {success ? (
            <SuccesDialog
              name={name}
              success={success}
              setSuccess={setSuccess}
              setName={setName}
              setCardNumber={setCardNumber}
              setExpiration={setExpiration}
              setCvv={setCvv}
              setZipCode={setZipCode}
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.card}>
          <PaymentCard
            name={name}
            setName={setName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expiration={expiration}
            setExpiration={setExpiration}
            cvv={cvv}
            setCvv={setCvv}
            zipCode={zipCode}
            setZipCode={setZipCode}
            setSuccess={setSuccess}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/vivitt/checkout-form"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon as={AiFillGithub} boxSize="1.5rem" />
        </a>
        <Text>Viviana Yanez 2022 | Made with ♥︎</Text>
      </footer>
    </div>
  );
}
