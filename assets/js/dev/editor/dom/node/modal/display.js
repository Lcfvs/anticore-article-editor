export function display(tooltip, dataURL) {
  tooltip.handle.img.src = dataURL;
  tooltip.close();
}