import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Flex, Button, Center, Image } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";

export function Header() {
  const router = useRouter();

  let isHome = false;

  if (router.asPath === "/") {
    isHome = true;
  }

  return (
    <Box
      as="header"
      w="100%"
      h="100"
      maxWidth={1440}
      mx="auto"
      p="8"
      bg="white"
    >
      <Flex align="center" justify="center">
        {!isHome && (
          <Box>
            <Link href="/">
              <a>
                <Button
                  as={FiChevronLeft}
                  bg="transparent"
                  size="sm"
                  color="gray.600"
                  variant="unstyled"
                />
              </a>
            </Link>
          </Box>
        )}
        <Box flex={1} w="100%">
          <Center>
            <Image src="/logo.png" alt="worldtrip" width="185" height="46" />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
