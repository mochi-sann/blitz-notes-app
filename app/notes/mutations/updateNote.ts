import { resolver } from "blitz"
import { z } from "zod"

import db from "db"

const UpdateNote = z.object({
  id: z.number(),
  name: z.string(),
})

export default resolver.pipe(
  resolver.zod(UpdateNote),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const note = await db.note.update({ where: { id }, data })

    return note
  }
)
