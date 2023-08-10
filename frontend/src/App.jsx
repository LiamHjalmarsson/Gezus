import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from "./Page/Root";
import ErrorPage from "./Page/Error";
import ExpensesPage from "./Page/Expenses";
import Signup from "./components/Account/Signup";
import FormPage from "./Page/Form";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          index: true,
          element: <ExpensesPage />,
          // loader: expensesLoader,
        }, 
        {
          path: "/addExpense",
          element: <FormPage />,
          // action: manipulateExpenseAction
        },
        {
          path: "/signup",
          element: <Signup />
        }
      ]
    }, 
  ]
);


function App() {
  return <RouterProvider router={router} />
}

export default App
