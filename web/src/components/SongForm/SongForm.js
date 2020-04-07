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

const SongForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.song?.id)
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
          name="user"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="user"
          defaultValue={props.song?.user}
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
          defaultValue={props.song?.concerts}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="concerts" className={CSS.errorMessage} />

        <Label
          name="singer"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="singer"
          defaultValue={props.song?.singer}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="singer" className={CSS.errorMessage} />

        <Label
          name="director"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="director"
          defaultValue={props.song?.director}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="director" className={CSS.errorMessage} />

        <Label
          name="parts"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="parts"
          defaultValue={props.song?.parts}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="parts" className={CSS.errorMessage} />

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

export default SongForm
