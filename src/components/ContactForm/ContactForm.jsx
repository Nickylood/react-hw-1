import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

import { useId } from "react";

export default function ContactForm({ onAdd }) {
  const fieldUser = useId();
  const fieldNumber = useId();

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(5),
          name: values.name,
          number: values.number,
          };
          onAdd(newContact);
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor={fieldUser}>Name: </label>
          <Field name="name" id={fieldUser} />
        </div>
        <div>
          <libel htmlFor={fieldNumber}>Number: </libel>
          <Field type="tel" name="number" id={fieldNumber} />
        </div>
        <button type="submit">addContact</button>
      </Form>
    </Formik>
  );
}
