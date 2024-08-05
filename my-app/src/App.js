import Dashboard from "../src/components/dashboardpannel/dashboard";
import Iteminfo from "../src/components/iteminfo/iteminfo";
import Acceptlist from "../src/components/itemlist/itemaccept";
// import Rejecttlist from "../src/components/itemReject/itemReject";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Dashboard />
      <Iteminfo />
      <div className="item_info">
        <Acceptlist />
        {/* <Rejecttlist /> */}
      </div>
    </div>
  );
}

export default App;
