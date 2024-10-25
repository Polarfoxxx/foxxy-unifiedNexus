
 function miniContentStyle() {
    const CALENDAR_NAV_PANEL = document.querySelector(".rbc-toolbar");

    if (CALENDAR_NAV_PANEL instanceof HTMLElement) {
      const width = CALENDAR_NAV_PANEL.offsetWidth;
      
      if (width < 600) {
        CALENDAR_NAV_PANEL.style.display = "none";
      } else {
        CALENDAR_NAV_PANEL.style.display = "block";
      };
    };
 };

 export default miniContentStyle;

