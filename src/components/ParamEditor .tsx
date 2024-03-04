import React from "react";

interface Param {
  id: number;
  name: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

class ParamEditor extends React.Component<Props, Model> {
  constructor(props: Props) {
    super(props);
    this.state = {
      paramValues: props.model.paramValues,
    };
  }

  handleChange = (
    paramId: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const paramValues = this.state.paramValues;

    const updatedParamValues = paramValues.map((paramValue) =>
      paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
    );

    this.setState({ paramValues: updatedParamValues });
  };

  getModel = () => {
    return { ...this.props.model, paramValues: this.state.paramValues };
  };

  render() {
    const params = this.props.params;
    const paramValues = this.state.paramValues;

    return (
      <div>
        {params.map((param) => {
          const paramValue = paramValues.find(
            (item) => item.paramId === param.id
          );
          const value = paramValue ? paramValue.value : "";

          return (
            <div key={param.id}>
              <label>{param.name}</label>
              <input
                type="text"
                value={value}
                onChange={(e) => this.handleChange(param.id, e)}
              />
            </div>
          );
        })}
        <button onClick={() => console.log(this.getModel())}>Show Model</button>
      </div>
    );
  }
}

export default ParamEditor;
