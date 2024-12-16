import "./App.css";

function App() {
  return (
    <div className="dark">
      <div className="dark:bg-slate-700">
        <h1>Title</h1>
        <h2>Subtitle</h2>
        <p className="text-base">Text</p>
        <a href="">Anchor</a>

        <button className="btn btn-primary block">Botão</button>
        <button disabled className="btn btn-primary block">
          Botão desabilitado
        </button>
      </div>
    </div>
  );
}

export default App;
