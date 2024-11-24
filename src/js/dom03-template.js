function createInputComponent(template) {
  return template.content.cloneNode(true).firstElementChild;
}

function appendInputComponent(inputComponent, container, output) {
  inputComponent.querySelector('.app-elem-title-no').textContent = `${
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
  const template = document.querySelector('template.app-tmpl-input');

  const addInputComponent = () => {
    appendInputComponent(createInputComponent(template), container, output);
  };

  document
    .querySelector('.app-cmd-add-input')
    .addEventListener('click', addInputComponent);

  addInputComponent();
});
