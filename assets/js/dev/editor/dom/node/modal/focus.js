export function focus(input) {
  input.focus();
  input.selectionStart = input.selectionEnd = input.value.length;
}