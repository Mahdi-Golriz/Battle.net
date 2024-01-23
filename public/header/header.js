async function header() {
    document.querySelector("div.logo").addEventListener("mousedown", function () {
      this.style.transform = "translateY(1px)";
    });
  
    document.querySelector("div.logo").addEventListener("mouseup", function () {
      this.style.transform = "translateY(-1px)";
    });
  
    document.querySelector("a.account-parent").addEventListener("mouseenter", function () {
        document.querySelector("div.account-child").classList.remove("hidden");
        document.querySelector("div.account-child").classList.add("block");
      });
  
    document.querySelector("div.account-child").addEventListener("mouseleave", function () {
        document.querySelector("div.account-child").classList.add("hidden");
        document.querySelector("div.account-child").classList.remove("block");
      });
  
    document.querySelector("div.account").addEventListener("mouseleave", function () {
        // Check if the mouse is not over the div.account
          document.querySelector("div.account-child").classList.add("hidden");
          document.querySelector("div.account-child").classList.remove("block");
      });
  }
  
  export default header;