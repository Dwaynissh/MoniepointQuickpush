import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./Router/MainRouter";
import { ContextProvider } from "./MrPeter/Global/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <RouterProvider router={MainRouter} />
    </ContextProvider>
  );
};

export default App;
