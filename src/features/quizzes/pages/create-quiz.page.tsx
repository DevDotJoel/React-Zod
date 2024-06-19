import React from "react";
import { Button } from "../../../components/ui/button/button";
import { QuizForm } from "../components/quiz-form";

export const CreateQuizPage = () => {
  function submit(data: any) {}
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <div className="card rounded-3 border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h3>
                    <b>Quiz</b>
                  </h3>
                  <div className="text-muted">
                    <b>Create your quiz</b>{" "}
                  </div>
                </div>
                <div className="col d-flex justify-content-end">
                  <div>
                    <Button
                      onClick={() => {}}
                      type="submit"
                      form="survey-form"
                      content=" Save"
                      icon="bi bi-floppy-fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="card rounded-3 border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <QuizForm submit={submit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
