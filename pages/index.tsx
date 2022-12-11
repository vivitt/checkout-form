import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PaymentCard from "../components/card";
import { Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout Form</title>
        <meta name="description" content="Talent Squad | Frontend III" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <PaymentCard />
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
