export type InputFormProps={
    name: string;
    label: string;
    control: any;
    errors:any
    type: "text" | "number" | "password" | "email" | "color" | "date";
}



export const InputForm = ({name,label,control,type,errors}:InputFormProps) => {
  return (
    <>  <label htmlFor={name} className="form-label">{label}</label>
        <input type={type} className={`form-control ${errors?.[`${name}`]?"is-invalid":""}` }{...control.register(name)}/>
        {errors?.[`${name}`] && (
              <span className="invalid-feedback d-block">
                {errors?.[`${name}`].message}
              </span>
            )}
    </>
  )
}
