function createInputComponent() {
  const component = document.createElement('div');
  component.classList.add('app-cmp-input');

  const label = document.createElement('label');

  const title = document.createElement('b');
  title.classList.add('app-elem-title');

  const input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('value', 0);
  input.classList.add('app-elem-input');

  label.append(title, input);
  component.append(label);

  return component;
}

function appendInputComponent(inputComponent, container, output) {
  inputComponent.querySelector('.app-elem-title').textContent = `Number ${
    container.querySelectorAll('.app-cmp-input').length + 1
  }`;

  const calculateResult = () => {
    const result = [...container.querySelectorAll('.app-cmp-input')]
      .map((component) =>
        component.querySelector('input[type="number"].app-elem-input'),
      )
      .reduce((result, element) => result + element.valueAsNumber, 0);

    output.value = `${result.toLocaleString()}`;
  };

  inputComponent
    .querySelector('input[type="number"].app-elem-input')
    .addEventListener('change', calculateResult);

  container.append(inputComponent);
  calculateResult();
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.app-cmp-inputs-list');
  const output = document.querySelector('.app-elem-result');

  const addInputComponent = () => {
    appendInputComponent(createInputComponent(), container, output);
  };

  document
    .querySelector('.app-cmd-add-input-component')
    .addEventListener('click', addInputComponent);

  addInputComponent();
});
