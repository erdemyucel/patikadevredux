import { Provider } from "react-redux";
import { store } from "./app/store";
import Board from "./Components/Board";


function App() {
  return (
    <div className='h-full'>
      <Provider store={store}>
        <Board />
      </Provider>
    </div>
  );
}

export default App;
