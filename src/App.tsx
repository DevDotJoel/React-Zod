import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/ui/layout/main-layout";
import { QuizzesPage } from "./features/quizzes/pages/quizzes.page";
import { CreateQuizPage } from "./features/quizzes/pages/create-quiz.page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "quizzes",
          element: <QuizzesPage />,
          children: [],
        },
        {
          path: "quizzes/create",
          element: <CreateQuizPage />,
          children: [],
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
