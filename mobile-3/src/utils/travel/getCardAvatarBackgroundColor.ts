export function getCardAvatarBackgroundColor() {
  const palette = ["#22A06B", "#9747FF"];
  return palette[Math.floor(Math.random() * palette.length)];
}
