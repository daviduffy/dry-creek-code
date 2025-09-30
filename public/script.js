function expand(self) {
  const dataset = self.dataset;
  if (!dataset) return;
  const id = dataset.id;
  if (!id) return;
  const el = document.getElementById(id);
  el.addEventListener('transitionend', () => {
    el.classList.add('jump--expanded');
    el.classList.remove('jump--expanding');
    // self.parentNode.remove(self);
  })
  el.classList.add('jump--expanding');
  self.parentNode.classList.add('jump-container--collapsing');
}
