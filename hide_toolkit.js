document.addEventListener("DOMContentLoaded", function () {
  window.$memberstackDom.getCurrentMember().then(({ data: member }) => {
    const els = document.querySelectorAll('[data-toolkit-show="true"]');
    if (!els.length) return;

    // 1. Check role before hiding anything
    const role = member?.customFields?.igniterole;
    const shouldShow = role === "reward_manager" || role === "super_admin";

    if (!shouldShow) {
      // Hide immediately — user doesn't have access, no accordion linking needed
      els.forEach(el => el.style.display = "none");
      return;
    }

    // 2. User DOES have access — keep visible, then trigger accordion after paint
    els.forEach(el => el.style.display = "block");

    // Wait one frame so the DOM has rendered at full height before openAccordion
    // measures scrollHeight
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initAccordionDefaults();
      });
    });
  });
});
