/* Mission 1c : simulateur et FAQ. JavaScript natif, sans framework. */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-gift-calculator]').forEach((form) => {
    const formula = form.querySelector('[name="gift_product"]');
    const quantity = form.querySelector('[name="gift_quantity"]');
    const total = form.querySelector('[data-gift-total]');
    const note = form.querySelector('[data-gift-feedback]');
    const currency = new Intl.NumberFormat('fr-FR', {style:'currency', currency:'EUR'});
    function update() {
      const count = Number(quantity.value);
      const price = Number(formula.selectedOptions[0]?.dataset.price);
      const valid = Number.isInteger(count) && count >= 1 && count <= 8 && Number.isFinite(price);
      quantity.setCustomValidity(valid ? '' : 'Choisissez entre 1 et 8 personnes.');
      total.textContent = valid ? currency.format(count * price) : 'Vérifiez la quantité';
      if (note) note.textContent = valid ? `${count} personne${count > 1 ? 's' : ''} / Carte valable un an` : '';
      return valid;
    }
    formula.addEventListener('change', update);
    quantity.addEventListener('input', update);
    form.querySelectorAll('[data-gift-step]').forEach(button => button.addEventListener('click', () => {
      quantity.value = String(Math.max(1, Math.min(8, (Number(quantity.value) || 1) + Number(button.dataset.giftStep)))); update();
    }));
    form.addEventListener('submit', event => {
      event.preventDefault(); if (!update() || !form.reportValidity()) return;
      const target = new URL(form.dataset.cartUrl);
      target.searchParams.set('add-to-cart', formula.value);
      target.searchParams.set('quantity', quantity.value);
      target.searchParams.set('tb_gift_sim', '1');
      window.location.assign(target.href);
    });
    update();
  });
  // Le HTML details/summary reste utilisable sans JavaScript. Le script synchronise l’état accessible.
  document.querySelectorAll('.gift-faq details').forEach(details => {
    const summary = details.querySelector('summary');
    const sync = () => summary.setAttribute('aria-expanded', String(details.open));
    details.addEventListener('toggle', sync); sync();
  });
});
