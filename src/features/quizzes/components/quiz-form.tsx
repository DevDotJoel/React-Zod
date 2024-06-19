import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

import { z } from "zod";
import { InputForm } from "../../../components/ui/input-form";
import { Button } from "../../../components/ui/button/button";
import { QuizQuestionForm } from "./quiz-question-form";
import { useState } from "react";

export const questionSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  description: z.string().min(1),
});
const schema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  description: z.string().min(8),
  questions: z.array(questionSchema),
});
export type QuestionFormFields = z.infer<typeof questionSchema>;
type QuizFormFields = z.infer<typeof schema>;
export type QuizFormProps = {
  submit: (data: QuizFormFields) => void;
};
export const QuizForm = ({ submit }: QuizFormProps) => {
  const methods = useForm<QuizFormFields>({
    defaultValues: undefined,
    resolver: zodResolver(schema),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  const [show, setShow] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
    keyName: "_id",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function addQuestion() {
    handleShow();
  }
  return (
    <>
      <FormProvider {...methods}>
        <form id="survey-form" onSubmit={methods.handleSubmit(submit)}>
          <div className="row">
            <div className="col d-flex justify-content-end">
              <div>
                <Button
                  onClick={addQuestion}
                  type="button"
                  content=" Question"
                  icon="bi bi-plus-lg"
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <InputForm
                name="name"
                label="Name"
                type="text"
                control={control}
                errors={errors}
              />
            </div>
            <div className="col">
              <InputForm
                name="description"
                label="Description"
                type="text"
                control={control}
                errors={errors}
              />
            </div>
          </div>
          <QuizQuestionForm show={show} handleClose={handleClose} />
        </form>
      </FormProvider>
    </>
  );
};
