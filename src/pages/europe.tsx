import { Flex, Box, Text, Image, Wrap, WrapItem, Button } from "@chakra-ui/react";
import React from "react";
import { FiAlertCircle } from "react-icons/fi";

import { Header } from "../components/Header";

export default function Europe() {
  return (
    <Flex w="100vw" h="100vh" bg="gray.900" direction="column">
      <Header />

      <Box w="100%" maxW={1440} mx="auto" bg="white">
        <Box maxW={1440} positon="relative">
          <Text
            position="absolute"
            color="white"
            fontSize={["4xl", "5xl"]}
            fontWeight="bold"
            mt={"96"}
            ml={["12", "32"]}
          >
            Europa
          </Text>

          <Image src="/banner_europe.png" alt="banner" w="100%" h={500} />
        </Box>

        <Flex w="100%" mt="16" mb="16">
          <Box ml={["4", "32"]} mr={["4", "16"]} maxW={600} textAlign="justify">
            <Text>
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
            <Flex w="100%" mr={["4", "16"]} align="center" justify="center">
              <Wrap spacing="12" minW={130} align="center" justify="center">
                <WrapItem>
                  <Flex direction="column" align="center">
                    <Box fontSize={["2xl", "4xl"]} fontWeight="bold" color="orange">50</Box>
                    <Box fontWeight="bold" color="gray.600">países</Box>
                  </Flex>
                </WrapItem>

                <WrapItem>
                  <Flex direction="column" align="center">
                    <Box fontSize={["2xl", "4xl"]} fontWeight="bold" color="orange">60</Box>
                    <Box fontWeight="bold" color="gray.600">línguas</Box>
                  </Flex>
                </WrapItem>

                <WrapItem>
                  <Flex direction="column" align="center">
                    <Box fontSize={["2xl", "4xl"]} fontWeight="bold" color="orange">27</Box>
                    <Box fontWeight="bold" color="gray.600">
                      cidades +100
                      <Button
                        as={FiAlertCircle}
                        ml={1}
                        bg="transparent"
                        size="small"
                        color="gray.400"
                        variant="unstyled"
                      />
                    </Box>
                  </Flex>
                </WrapItem>
              </Wrap>
            </Flex>
        </Flex>
        <Box w="100%" ml={["4", "32"]} mr={["4", "32"]}>
          <Text fontSize={["2xl","3xl"]} color="gray.600">
            Cidades +100
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
