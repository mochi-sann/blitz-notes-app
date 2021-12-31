import { useState } from "react"
import SimpleMDE from "react-simplemde-editor"
import { z } from "zod"

import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"

export { FORM_ERROR } from "app/core/components/Form"

export function NoteForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  const [value, setValue] = useState("Initial value")

  const onChange = (value: string) => {
    setValue(value)
  }

  return (
    <Form<S> {...props}>
      {/* <LabeledTextField name="name" label="Name" placeholder="Name" /> */}
      {/* <SimpleMDE value={value} onChange={onChange} /> */}
    </Form>
  )
}
