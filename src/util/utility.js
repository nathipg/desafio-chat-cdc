export const formEntriesHandler = event => {
  const form = new FormData(event.target);
  const formData = Object.fromEntries(form.entries());
  return formData;
};
