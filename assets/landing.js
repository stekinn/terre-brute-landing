/* Interactions natives, indépendantes du thème WordPress. */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-tb-landing]').forEach((page) => {
    const menu = page.querySelector('[data-menu-toggle]');
    const navigation = page.querySelector('[data-mobile-nav]');
    menu?.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!expanded));
      if (navigation) navigation.hidden = expanded;
    });
    navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      navigation.hidden = true;
      menu?.setAttribute('aria-expanded', 'false');
    }));

    page.querySelectorAll('[data-faq-trigger]').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const panel = page.querySelector(`#${CSS.escape(trigger.getAttribute('aria-controls'))}`);
        if (!panel) return;
        const expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!expanded));
        panel.hidden = expanded;
      });
    });

    const form = page.querySelector('[data-gift-form]');
    if (!form) return;
    const formula = form.querySelector('[name="formula"]');
    const quantity = form.querySelector('[name="quantity"]');
    const output = form.querySelector('[data-gift-total]');
    const status = form.querySelector('[data-gift-status]');
    const currency = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
    const prices = Object.fromEntries(Array.from(formula.options, option => [option.value, Number(option.dataset.price)]));

    function update() {
      const count = Number(quantity.value);
      const valid = Number.isInteger(count) && count >= 1 && count <= 8 && Object.hasOwn(prices, formula.value);
      quantity.setCustomValidity(valid ? '' : 'Choisissez entre 1 et 8 personnes.');
      if (valid) output.textContent = currency.format(prices[formula.value] * count);
      if (status) status.hidden = true;
    }

    formula.addEventListener('change', update);
    quantity.addEventListener('input', update);
    form.querySelectorAll('[data-quantity-step]').forEach((button) => button.addEventListener('click', () => {
      const current = Number(quantity.value) || 1;
      quantity.value = String(Math.min(8, Math.max(1, current + Number(button.dataset.quantityStep))));
      update();
    }));
    page.querySelectorAll('[data-select-formula]').forEach((button) => button.addEventListener('click', () => {
      if (!Object.hasOwn(prices, button.dataset.selectFormula)) return;
      formula.value = button.dataset.selectFormula;
      update();
    }));
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      update();
      if (!form.reportValidity()) return;
      const checkout = form.dataset.checkout;
      if (checkout) {
        const url = new URL(checkout, window.location.origin);
        if (url.origin !== window.location.origin) return;
        url.searchParams.set('tb_formula', formula.value);
        url.searchParams.set('tb_quantity', quantity.value);
        window.location.assign(url.href);
      } else if (status) {
        status.hidden = false;
        status.textContent = 'Votre sélection est prête. La vente en ligne n’est pas encore configurée : aucun paiement ni achat n’a été effectué.';
      }
    });
    update();
  });
});
