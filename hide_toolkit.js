document.addEventListener("DOMContentLoaded", function () {
  window.$memberstackDom.getCurrentMember().then(({ data: member }) => {
    const els = document.querySelectorAll('[data-toolkit-show="true"]');
    const role = member?.customFields?.igniterole;
    const hasAccess = role === "reward_manager" || role === "super_admin";

    if (els.length) {
      // Hide or show gated elements based on role
      els.forEach(el => el.style.display = hasAccess ? "block" : "none");
    }

    // Always init accordions here — after visibility is resolved,
    // so scrollHeight is accurate for any revealed elements
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initAccordionDefaults();
      });
    });
  });
});
