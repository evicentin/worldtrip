import Link from "next/link";

import {
  Flex,
  Box,
  Text,
  Image,
  Wrap,
  WrapItem,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Header } from "../components/Header";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w="100vw" h="100vh" bg="gray.900" direction="column">
      <Header />

      <Box w="100%" maxW={1440} mx="auto" bg="white">
        <Box maxW={1440} positon="relative">
          <Text
            position="absolute"
            color="white"
            fontSize={["2xl", "3xl"]}
            mt={["16", "20"]}
            ml={["12", "32"]}
          >
            5 Continentes, <br />
            Infinitas possibilidades
          </Text>

          <Text
            position="absolute"
            color="gray.100"
            maxWidth={420}
            fontSize="md"
            mt="44"
            mr="4"
            ml={["12", "32"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou
          </Text>

          <Flex pos="absolute" mt="20" right="32">
            {isWideVersion && <Image src="/airplane.png" alt="airplane" />}
          </Flex>

          <Image src="/background.png" alt="banner" w="100%" h={335} />
        </Box>

        <Center p="2" mt="20" mb="12" maxW={1440}>
          <Wrap spacing="8">
            <WrapItem>
              <Center w="40" h="40">
                <Image src="/nightlife.png" alt="nigthlife" h={145} />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="40" h="40">
                <Image src="/beach.png" alt="beach" h={145} />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="40" h="40">
                <Image src="/modern.png" alt="modern" h={145} />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="40" h="40">
                <Image src="/classic.png" alt="classic" h={145} />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="40" h="40">
                <Image src="/more.png" alt="more" h={145} />
              </Center>
            </WrapItem>
          </Wrap>
        </Center>

        <Center mb="16" maxW={1440}>
          <Box as="div" bg="gray.600" w={100} h={0.5} />
        </Center>

        <Center>
          <Text color="gray.600" fontSize={["2xl", "3xl"]}>
            Vamos nessa?
          </Text>
        </Center>

        <Center mb="20">
          <Text color="gray.600" fontSize={["2xl", "3xl"]}>
            Então escolha seu continente
          </Text>
        </Center>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          <SwiperSlide>
            <Link href="/europe">
              <a>
                <Center>
                  <Text
                    mt={250}
                    color="white"
                    fontSize={["2xl", "3xl"]}
                    fontWeight="bold"
                    position="absolute"
                  >
                    Europa
                  </Text>
                </Center>
                <Center>
                  <Text
                    mt={320}
                    color="white"
                    fontSize={["md"]}
                    fontWeight="bold"
                    position="absolute"
                  >
                    O continente mais antigo.
                  </Text>
                </Center>
                <Image src="/europe.png" alt="europe" w="100%" />
              </a>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Center>
              <Text
                mt={250}
                color="white"
                fontSize={["2xl", "3xl"]}
                fontWeight="bold"
                position="absolute"
              >
                América
              </Text>
            </Center>
            <Center>
              <Text
                mt={320}
                color="white"
                fontSize={["md"]}
                fontWeight="bold"
                position="absolute"
              >
                A terra da liberdade.
              </Text>
            </Center>
            <Image src="/america.png" alt="europe" w="100%" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
}
