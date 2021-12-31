import { resolver } from "blitz"
import { z } from "zod"

import db from "db"

const CreateNote = z.object({
  title: z.string(),
  body: z.string(),
})

export default resolver.pipe(resolver.zod(CreateNote), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const note = await db.note.create({ data: input })

  return note
})
