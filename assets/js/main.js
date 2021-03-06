(function (doc) {
  const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

  doc.addEventListener('DOMContentLoaded', () => {
    doc.documentElement.style.setProperty(
      '--cdt-random',
      `hsla(${random(0, 360)},${random(80, 100)}%,${random(30, 70)}%, 0.${random(10, 20)})`
    );
  });
})(document);
