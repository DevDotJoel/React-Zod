import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { InputForm } from "./ui/input-form";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

export type LoginFormProps = {
  submit: (data: FormFields) => void;
};
export const LoginForm = ({ submit }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: undefined,
    resolver: zodResolver(schema),
  });
  return (
    <>
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col col-6">
          <form onSubmit={handleSubmit(submit)}>
            <div className="row mt-5">
              <div className="col ">
                <h1>Sign In</h1>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <InputForm
                  name="email"
                  label="Email"
                  type="email"
                  control={control}
                  errors={errors}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <InputForm
                  name="password"
                  label="Password"
                  type="password"
                  control={control}
                  errors={errors}
                />
              </div>
            </div>
            <div className="row mt-4 ">
              <div className="col">
                <button className="btn btn-dark w-100">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
