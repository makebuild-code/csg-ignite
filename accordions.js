function openAccordion(accordion) {
  const trigger = accordion.querySelector('[cc-accordion-element="trigger"]');
  const content = accordion.querySelector('[cc-accordion-element="content"]');
  const icon    = accordion.querySelector('[cc-accordion-element="icon"]');

  trigger.setAttribute('aria-expanded', 'true');
  content.style.height  = `${content.scrollHeight}px`;
  content.style.opacity = '1';
  icon.style.transform  = 'rotate(180deg)';
  accordion.setAttribute('open', '');
}

function scrollWithOffset(element, offsetRem = 4) {
  const offsetPx = offsetRem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  const top = element.getBoundingClientRect().top + window.scrollY - offsetPx;
  window.scrollTo({ top, behavior: 'smooth' });
}

function initAccordionDefaults() {
  const params = new URLSearchParams(window.location.search);
  const anchor = params.get('guide');

  if (anchor) {
    const target = document.querySelector(`[cc-accordion-anchor="${anchor}"]`);
    if (target) {
      openAccordion(target);
      scrollWithOffset(target, 10);
      return;
    }
  }

  // Fallback: open first accordion in each list
  document.querySelectorAll('[cc-accordion-element="list"]').forEach(list => {
    const first = list.querySelector('[cc-accordion-element="accordion"]');
    if (first) openAccordion(first);
  });
}

/* How to link to a specific accordion from anywhere on the site:
   https://yoursite.com/page?guide=key-contacts
*/
