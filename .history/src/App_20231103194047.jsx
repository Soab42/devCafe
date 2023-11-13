import { Provider } from "react-redux";
import DevCafeMain from "./DevCafeMain";
import { store } from "./app/store";
function App() {
  return (
    <div className="w-screen h-screen bg-[rgb(18,26,45)] overflow-hidden">
      <Provider store={store}>
        <DevCafeMain />
      </Provider>
    </div>
  );
}

export default App;
