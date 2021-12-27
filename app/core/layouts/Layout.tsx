import { Head, BlitzLayout, Link } from "blitz"
import { Container, Stack, Box, Heading } from "@chakra-ui/react"
import React from "react"
type LayoutProps = {
  title: string
  children: React.ReactChildren
}
const Layout: BlitzLayout<LayoutProps> = ({ title, children }: LayoutProps) => {
  const ContainerMaxW = "800px"
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box borderBottomWidth="2px">
        <Container maxW={ContainerMaxW}>
          <Stack p="2" spacing="2" direction="row">
            <Heading>
              <Link href="/">{"ppeage" + title}</Link>
            </Heading>
          </Stack>
        </Container>
      </Box>
      <Container maxW={ContainerMaxW}>{children}</Container>
    </>
  )
}

export default Layout
