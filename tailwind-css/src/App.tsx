import "./App.css";

function App() {
  return (
    <div className="container">
      <div>Header</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>Sidebar</div>
          <div>Menu</div>
        </div>
        <div>Main content</div>
      </div>
    </div>
  );
}

export default App;
