import dynamic from "next/dynamic"
import { useState } from "react"
import { Controller } from "react-hook-form"
import { z } from "zod"

import { Form, FormProps } from "app/core/components/Form"
import { LabeledTextField } from "app/core/components/LabeledTextField"

import "@uiw/react-md-editor/markdown-editor.css"
import "@uiw/react-markdown-preview/markdown.css"

export { FORM_ERROR } from "app/core/components/Form"
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false })

export function NoteForm<S extends z.ZodType<any, any>>(props: FormProps<S>) {
  // const [value, setValue] = useState("**Hello world!!!**")

  return (
    <Form<S> {...props}>
      <LabeledTextField name="title" label="タイトル" placeholder="タイトル" />
      <Controller
        // control={}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          // <TextInput style={styles.input} onBlur={onBlur} onChangeText={onChange} value={value} />
          <MDEditor value={value} onChange={(value) => onChange(value || "")} />
        )}
        name="body"
      />
    </Form>
  )
}
