import { Controller } from "react-hook-form"
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"
import { loginFormSchema } from "./schema/login.schema"

type InputFieldProps = {
  label: string
  id: string
  type: string
  field: string
  errors: any
  control: any
}

const InputField = ({ label, id, type, field, errors, control }: InputFieldProps) => {
  const error = errors?.[field]?.message
  return (
    <div>
      <Label className="sr-only" htmlFor={id}>
        {label}
      </Label>
      <Controller
        name={field}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <Input {...field} id={id} placeholder={label} type={type} />
            <p className="mt-2 text-xs text-destructive">{error}</p>
          </>
        )}
        rules={loginFormSchema[field]}
      />
    </div>
  )
}

export default InputField
