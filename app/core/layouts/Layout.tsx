import { Head, BlitzLayout, Link } from "blitz"
import { Container, Stack, Box, Heading } from "@chakra-ui/react"
const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "blitz-notes-app"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Stack direction="row">
          <Heading>
            <Link href="/">Notes App</Link>
          </Heading>
        </Stack>
      </Box>
      <Container maxW="800px">{children}</Container>
    </>
  )
}

export default Layout
