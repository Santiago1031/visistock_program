"use client"

import { Form } from "@/components/Form"

export default function LoginPage () {
  return (
    <>
      <Form title="title" onSubmit={() => {}}>
        <Form.Input
        label="Label"
        name="name"
        placeholder="Name..."
        type="text"
      />
      </Form>
    </>
  )
}
