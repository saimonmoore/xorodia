import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const SingerForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.singer?.id)
  }

  return (
    <div className="text-sm -mt-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mb-4"
          titleClassName="font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="defaultPart"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="defaultPart"
          defaultValue={props.singer?.defaultPart}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="defaultPart" className={CSS.errorMessage} />

        <Label
          name="user"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="user"
          defaultValue={props.singer?.user}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="user" className={CSS.errorMessage} />

        <Label
          name="concerts"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="concerts"
          defaultValue={props.singer?.concerts}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="concerts" className={CSS.errorMessage} />

        <Label
          name="songs"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="songs"
          defaultValue={props.singer?.songs}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="songs" className={CSS.errorMessage} />

        <div className="mt-8 text-center">
          <Submit
            disabled={props.loading}
            className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SingerForm
