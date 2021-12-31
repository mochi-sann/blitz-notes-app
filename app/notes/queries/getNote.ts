import { resolver, NotFoundError } from "blitz"
import { z } from "zod"

import db from "db"

const GetNote = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})

export default resolver.pipe(resolver.zod(GetNote), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const note = await db.note.findFirst({ where: { id } })

  if (!note) throw new NotFoundError()

  return note
})
