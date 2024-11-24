document.addEventListener('DOMContentLoaded', () => {
  const inputConponents = [
    ...document.querySelectorAll(
      '.app-cmp-input input[type="number"].app-elem-input',
    ),
  ];

  inputConponents.forEach((element) => {
    element.addEventListener('change', () => {
      const result = inputConponents.reduce(
        (result, element) => result + element.valueAsNumber,
        0,
      );

      document.querySelector('output.app-elem-result').value =
        `${result.toLocaleString()}`;
    });
  });
});
