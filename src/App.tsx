import React from "react";
import ParamEditor from "./components/ParamEditor ";

const params = [
  { id: 1, name: "Назначение" },
  { id: 2, name: "Длина" },
];

const model = {
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "макси" },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Product Editor</h1>
      <ParamEditor params={params} model={model} />
    </div>
  );
};

export default App;
