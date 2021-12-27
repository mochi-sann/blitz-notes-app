import { Head, BlitzLayout, Link } from "blitz"
import { Container, Stack, Box, Heading } from "@chakra-ui/react"
const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  const ContainerMaxW = "800px"
  return (
    <>
      <Head>
        <title>{title || "blitz-notes-app"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Container maxW={ContainerMaxW}>
          <Stack p="2" borderBottomWidth="2px" spacing="2" direction="row">
            <Heading>
              <Link href="/">Notes App</Link>
            </Heading>
          </Stack>
        </Container>
      </Box>
      <Container maxW={ContainerMaxW}>{children}</Container>
    </>
  )
}

export default Layout
