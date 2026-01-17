(function () {
  window.HCM_AGENT = {
    mayAppear() {
      const el = document.getElementById("agent-output");
      if (!el) return;

      el.textContent =
        "…presence acknowledges the moment…";

      setTimeout(() => {
        el.textContent = "";
      }, 4000);
    }
  };
})();
