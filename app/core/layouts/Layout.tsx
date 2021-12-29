import { Head, BlitzLayout, Link } from "blitz"
import { Container, Stack, Text, Box, Heading, Flex } from "@chakra-ui/react"
import React from "react"
type LayoutProps = {
  title: string
  children: React.ReactNode
}
const Layout: BlitzLayout<LayoutProps> = ({ title, children }: LayoutProps) => {
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
                <Link href="/">{"ppeage" + title}</Link>
              </Heading>
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
