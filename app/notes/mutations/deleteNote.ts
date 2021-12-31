import { resolver } from "blitz"
import { z } from "zod"

import db from "db"

const DeleteNote = z.object({
  id: z.number(),
})

export default resolver.pipe(resolver.zod(DeleteNote), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const note = await db.note.deleteMany({ where: { id } })

  return note
})
