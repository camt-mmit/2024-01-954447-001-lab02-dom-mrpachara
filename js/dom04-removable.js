function createInputComponent(template) {
  return template.content.cloneNode(true).firstElementChild;
}

function appendInputComponent(inputComponent, container, output) {
  const updateInputComponents = () => {
    [...container.querySelectorAll('.app-cmp-input')].forEach(
      (component, index, inputComponents) => {
        [...component.querySelectorAll('.app-elem-title-no')].forEach(
          (titleNo) => (titleNo.textContent = `${index + 1}`),
        );

        [...component.querySelectorAll('.app-cmd-remove-input')].forEach(
          (cmdRemoveInput) =>
            (cmdRemoveInput.disabled = inputComponents.length === 1),
        );
      },
    );
  };

  const calculateResult = () => {
    const result = [...container.querySelectorAll('.app-cmp-input')]
      .map((component) =>
        component.querySelector('input[type="number"].app-elem-input'),
      )
      .reduce((result, element) => result + element.valueAsNumber, 0);

    output.value = `${result.toLocaleString()}`;
  };

  inputComponent.addEventListener('click', (ev) => {
    if (ev.target?.matches('.app-cmd-remove-input')) {
      inputComponent.remove();
      updateInputComponents();
      calculateResult();
    }
  });

  inputComponent
    .querySelector('input[type="number"].app-elem-input')
    .addEventListener('change', calculateResult);

  container.append(inputComponent);
  updateInputComponents();
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
