import React from "react";
import { Carousel, Modal } from "react-bootstrap";
import { QuestionFormFields, questionSchema } from "./quiz-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../../../components/ui/input-form";
import { Button } from "../../../components/ui/button/button";

export type QuizQuestionFormProps = {
  show: boolean;
  handleClose: () => void;
  question?: QuestionFormFields;
  save: (question: QuestionFormFields) => void;
};
export const QuizQuestionForm = ({
  show,
  handleClose,
  question,
  save,
}: QuizQuestionFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionFormFields>({
    defaultValues: question ? question : undefined,
    resolver: zodResolver(questionSchema),
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="question-form" onSubmit={handleSubmit(save)}>
            <div className="row">
              <div className="col d-flex justify-content-end">
                <Button
                  onClick={() => {}}
                  type="submit"
                  form="question-form"
                  content=" Save"
                  icon="bi bi-floppy-fill"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <InputForm
                  name="title"
                  label="Title"
                  type="text"
                  control={control}
                  errors={errors}
                />
              </div>
            </div>
            <div className="row">
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
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
