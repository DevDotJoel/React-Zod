import React from "react";
import { LinkButton } from "../../../components/ui/link-button/link-button";

export const QuizzesPage = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col">
          <div className="card rounded-3 border-0">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h3>
                    <b>Quizzes</b>
                  </h3>
                  <div className="text-muted">
                    <b>Manage and list surveys</b>{" "}
                  </div>
                </div>
                <div className="col d-flex justify-content-end">
                  <div>
                    <LinkButton
                      to="create"
                      content=" Quizz"
                      icon="bi bi-plus-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
