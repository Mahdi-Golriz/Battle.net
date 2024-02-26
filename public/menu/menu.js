async function menu() {
  document
    .querySelector("li.li-1-1")
    .addEventListener("mousedown", function () {
      document.querySelector("svg#Layer_11").style.transform =
        "translateY(2px)";
      document.querySelector("div.div-1-1").style.transform = "translateY(2px)";
    });

  document.querySelector("li.li-1-1").addEventListener("mouseup", function () {
    document.querySelector("svg#Layer_11").style.transform = "translateY(-2px)";
    document.querySelector("div.div-1-1").style.transform = "translateY(-2px)";
  });

  // window.addEventListener("scroll", function () {
  //   let st = this.scrollY || document.documentElement.scrollTop;
  //   let menuDiv = document.querySelector("div.menu");
  //   if (st > 0) {
  //     menuDiv.style.position = "sticky";
  //     menuDiv.style.top = "0";
  //     menuDiv.style.transition = "500ms";
  //   } else {
  //     menuDiv.style.position = "";
  //     menuDiv.style.top = "";
  //     menuDiv.style.transition = "";
  //   }
  // });

  document
    .querySelector("li.first-ul")
    .addEventListener("mouseenter", function () {
      document.querySelector("ul.first-menu").classList.remove("hidden");
      document.querySelector("ul.first-menu").classList.add("block");
    });

  document
    .querySelector("li.first-ul")
    .addEventListener("mouseleave", function () {
      document.querySelector("ul.first-menu").classList.add("hidden");
      document.querySelector("ul.first-menu").classList.remove("block");
    });

  document
    .querySelector("li.second-ul")
    .addEventListener("mouseenter", function () {
      document.querySelector("ul.second-menu").classList.remove("hidden");
      document.querySelector("ul.second-menu").classList.add("block");
    });

  document
    .querySelector("li.second-ul")
    .addEventListener("mouseleave", function () {
      document.querySelector("ul.second-menu").classList.add("hidden");
      document.querySelector("ul.second-menu").classList.remove("block");
    });

  document
    .querySelector("li.third-ul")
    .addEventListener("mouseenter", function () {
      document.querySelector("ul.third-menu").classList.remove("hidden");
      document.querySelector("ul.third-menu").classList.add("block");
    });

  document
    .querySelector("li.third-ul")
    .addEventListener("mouseleave", function () {
      document.querySelector("ul.third-menu").classList.add("hidden");
      document.querySelector("ul.third-menu").classList.remove("block");
    });

  document
    .querySelector("li.fourth-ul")
    .addEventListener("mouseenter", function () {
      document.querySelector("ul.fourth-menu").classList.remove("hidden");
      document.querySelector("ul.fourth-menu").classList.add("block");
    });

  document
    .querySelector("li.fourth-ul")
    .addEventListener("mouseleave", function () {
      document.querySelector("ul.fourth-menu").classList.add("hidden");
      document.querySelector("ul.fourth-menu").classList.remove("block");
    });

  document
    .querySelector("li.fifth-ul")
    .addEventListener("mouseenter", function () {
      document.querySelector("ul.fifth-menu").classList.remove("hidden");
      document.querySelector("ul.fifth-menu").classList.add("block");
    });

  document
    .querySelector("li.fifth-ul")
    .addEventListener("mouseleave", function () {
      document.querySelector("ul.fifth-menu").classList.add("hidden");
      document.querySelector("ul.fifth-menu").classList.remove("block");
    });

  document
    .querySelector("li.sixth-ul")
    .addEventListener("mouseenter", function () {
      document.querySelector("ul.sixth-menu").classList.remove("hidden");
      document.querySelector("ul.sixth-menu").classList.add("block");
    });

  document
    .querySelector("li.sixth-ul")
    .addEventListener("mouseleave", function () {
      document.querySelector("ul.sixth-menu").classList.add("hidden");
      document.querySelector("ul.sixth-menu").classList.remove("block");
    });

  // document
  //   .querySelector("div.closebutton")
  //   .addEventListener("click", function () {
  //     document.querySelector("span.close").classList.remove("hidden");
  //     document.querySelector("span.close").classList.add("block");
  //   });

  // document.querySelector("span.close").addEventListener("click", function (e) {
  //   e.stopPropagation();
  //   this.classList.remove("block");
  //   this.classList.add("hidden");
  // });

  /// Search component

  const closeButton = document.querySelector("div.closebutton");
  const input = document.querySelector("input");
  const nav = document.querySelector("nav");
  const search = document.querySelector("div.search");

  let scrollListenerAdded = false; // Track if scroll event listener is added

  function handleSmallScreenEvents() {
    // Add or remove Tailwind CSS classes based on conditions
    if (scrollListenerAdded) {
      window.removeEventListener("scroll", handleScroll);
      scrollListenerAdded = false;
    }
  }

  function handleMediumScreenEvents() {
    // Add event listener to closeButton to toggle classes
    closeButton.addEventListener("click", toggleMediumScreenEvents);
  }

  // Function to toggle classes for medium screens
  function toggleMediumScreenEvents() {
    input.classList.toggle("lg:hidden");
    input.classList.toggle("lg:block");
    nav.classList.toggle("hidden");
    search.classList.toggle("w-auto");
    search.classList.toggle("w-full");
  }

  // Function to reset to initial state for medium screens
  function resetMediumScreenEvents() {
    input.classList.remove("lg:block");
    input.classList.add("lg:hidden");
    nav.classList.remove("hidden");
    search.classList.remove("w-full");
    search.classList.add("w-auto");
    // Remove event listener for closeButton
    closeButton.removeEventListener("click", toggleMediumScreenEvents);
  }

  function handleLargeScreenEvents() {
    // Add or remove Tailwind CSS classes based on conditions
    if (!scrollListenerAdded) {
      window.addEventListener("scroll", handleScroll);
      scrollListenerAdded = true;
    }
  }

  // Function to check if click is outside of closeButton
  function isClickOutsideCloseButton(event) {
    return !event.target.closest("div.closebutton");
  }

  // Event listener for clicks outside of closeButton
  document.body.addEventListener("click", function (event) {
    if (isClickOutsideCloseButton(event)) {
      // Reset to initial state for medium screens
      resetMediumScreenEvents();
    }
  });
  // Function to handle scroll for large screens
  function handleScroll() {
    let st = window.scrollY || document.documentElement.scrollTop;
    let menuDiv = document.querySelector("div.menu");
    if (st > 0) {
      menuDiv.style.position = "sticky";
      menuDiv.style.top = "0";
      menuDiv.style.transition = "500ms";
    } else {
      menuDiv.style.position = "";
      menuDiv.style.top = "";
      menuDiv.style.transition = "";
    }
  }

  // Function to check responsive condition and attach appropriate event listeners
  function setupResponsiveEventsSearch() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1024) {
      handleSmallScreenEvents();
    } else if (screenWidth >= 1024 && screenWidth <= 1280) {
      handleMediumScreenEvents();
    } else if (screenWidth > 1280) handleLargeScreenEvents();
  }

  // Initial setup
  setupResponsiveEventsSearch();

  // Event listener for window resize
  window.addEventListener("resize", function () {
    setupResponsiveEventsSearch();

    // Reset to initial state for medium screens when screen size changes
    if (window.innerWidth < 1024 || window.innerWidth > 1280) {
      resetMediumScreenEvents();
    }
  });

  /// Search component

  document
    .querySelector("div.balance")
    .addEventListener("mouseenter", function () {
      document.querySelector("ul.balanceul").classList.remove("hidden");
      document.querySelector("ul.balanceul").classList.add("block");
    });
  document
    .querySelector("div.balance")
    .addEventListener("mouseleave", function () {
      document.querySelector("ul.balanceul").classList.add("hidden");
      document.querySelector("ul.balanceul").classList.remove("block");
    });
}

export default menu;
