import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ExpensesPage from "./components/Expenses/ExpensesPage";
import RootPage from "./components/Root/RootPage";
import FormPage from "./components/Expenses/ExpenseForm/Page";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootPage />,
      id: "root",
      children: [
        {
          path: "/",
          index: true,
          element: <ExpensesPage />,
        }, 
        {
          path: "/addExpense",
          element: <FormPage />,
        }
      ]
    }
  ]
);


function App() {
  return <RouterProvider router={router} />
}

export default App
