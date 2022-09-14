export const formData = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll("input");
  let values: { [prop: string | number]: string | number } = {};

  inputs.forEach((input) => {
    values[input.id] = input.value;
  });

  return values;
};
