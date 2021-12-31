import { Container, Stack, Text, Box, Heading, Flex, Spacer } from "@chakra-ui/react"
import { Head, BlitzLayout, Link } from "blitz"
import React, { Suspense } from "react"

import User from "app/auth/components/UserInfo"

import { useCurrentUser } from "../hooks/useCurrentUser"
type LayoutProps = {
  title?: string
  children: React.ReactNode
}
const Layout: BlitzLayout<LayoutProps> = ({ title = "none", children }: LayoutProps) => {
  const ContainerMaxW = "800px"
  return (
    <Box h="100vh">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex h="100%" flexDirection="column">
        <Box borderBottomWidth="2px">
          <Container maxW={ContainerMaxW}>
            <Stack p="2" spacing="2" direction="row">
              <Heading>
                <Link href="/">{"Home" + title}</Link>
              </Heading>
              <Spacer />
              <User />
            </Stack>
          </Container>
        </Box>

        <Container maxW={ContainerMaxW} flex="1" h="100%">
          {children}
        </Container>

        <Box as="footer" borderTopWidth="2px">
          <Container maxW={ContainerMaxW}>
            <Stack p="2" spacing="2" direction="row">
              <Text>テキスト </Text>
            </Stack>
          </Container>
        </Box>
      </Flex>
    </Box>
  )
}

export default Layout
