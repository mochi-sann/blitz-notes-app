import { Box, Flex, Heading } from "@chakra-ui/react"
import { Note } from "@prisma/client"
import React from "react"

export type NoteCardProps = {
  note: Note
}

const NoteCard: React.VFC<NoteCardProps> = (props) => {
  return (
    <Box>
      <Flex>
        <Heading>{props.note.title}</Heading>
      </Flex>
    </Box>
  )
}

export default NoteCard
