async function menu() {
    document.querySelector("li.li-1-1").addEventListener("mousedown", function () {
        document.querySelector("svg#Layer_11").style.transform = "translateY(2px)";
        document.querySelector("div.div-1-1").style.transform = "translateY(2px)";
      });
    
      document.querySelector("li.li-1-1").addEventListener("mouseup", function () {
        document.querySelector("svg#Layer_11").style.transform = "translateY(-2px)";
        document.querySelector("div.div-1-1").style.transform = "translateY(-2px)";
    });

    
    window.addEventListener("scroll", function () {
      let st = this.scrollY || document.documentElement.scrollTop;
      let menuDiv = document.querySelector("div.menu");
      if (st > 0) {
        menuDiv.style.position = "sticky";
        menuDiv.style.top = "0"
        menuDiv.style.transition = "500ms"
      } else {
        menuDiv.style.position = "";
        menuDiv.style.top = ""
        menuDiv.style.transition = ""
      }
    });

    document.querySelector("li.first-ul").addEventListener("mouseenter", function () {
        document.querySelector("ul.first-menu").classList.remove("hidden");
        document.querySelector("ul.first-menu").classList.add("block");
      });

      document.querySelector("li.first-ul").addEventListener("mouseleave", function () {
        document.querySelector("ul.first-menu").classList.add("hidden");
        document.querySelector("ul.first-menu").classList.remove("block");
      });

      document.querySelector("li.second-ul").addEventListener("mouseenter", function () {
        document.querySelector("ul.second-menu").classList.remove("hidden");
        document.querySelector("ul.second-menu").classList.add("block");
      });

      document.querySelector("li.second-ul").addEventListener("mouseleave", function () {
        document.querySelector("ul.second-menu").classList.add("hidden");
        document.querySelector("ul.second-menu").classList.remove("block");
      })

      document.querySelector("li.third-ul").addEventListener("mouseenter", function () {
        document.querySelector("ul.third-menu").classList.remove("hidden");
        document.querySelector("ul.third-menu").classList.add("block");
      });

      document.querySelector("li.third-ul").addEventListener("mouseleave", function () {
        document.querySelector("ul.third-menu").classList.add("hidden");
        document.querySelector("ul.third-menu").classList.remove("block");
      })

      document.querySelector("li.fourth-ul").addEventListener("mouseenter", function () {
        document.querySelector("ul.fourth-menu").classList.remove("hidden");
        document.querySelector("ul.fourth-menu").classList.add("block");
      });

      document.querySelector("li.fourth-ul").addEventListener("mouseleave", function () {
        document.querySelector("ul.fourth-menu").classList.add("hidden");
        document.querySelector("ul.fourth-menu").classList.remove("block");
      })

      document.querySelector("li.fifth-ul").addEventListener("mouseenter", function () {
        document.querySelector("ul.fifth-menu").classList.remove("hidden");
        document.querySelector("ul.fifth-menu").classList.add("block");
      });

      document.querySelector("li.fifth-ul").addEventListener("mouseleave", function () {
        document.querySelector("ul.fifth-menu").classList.add("hidden");
        document.querySelector("ul.fifth-menu").classList.remove("block");
      })

      document.querySelector("li.sixth-ul").addEventListener("mouseenter", function () {
        document.querySelector("ul.sixth-menu").classList.remove("hidden");
        document.querySelector("ul.sixth-menu").classList.add("block");
      });

      document.querySelector("li.sixth-ul").addEventListener("mouseleave", function () {
        document.querySelector("ul.sixth-menu").classList.add("hidden");
        document.querySelector("ul.sixth-menu").classList.remove("block");
      })

      
      document.querySelector("div.closebutton").addEventListener("click", function () {
        document.querySelector("span.close").classList.remove("hidden");
        document.querySelector("span.close").classList.add("block");
      })

      document.querySelector("span.close").addEventListener("click", function (e) {
        e.stopPropagation()
        this.classList.remove("block");
        this.classList.add("hidden");
      })

      document.querySelector("div.balance").addEventListener("mouseenter", function () {
        document.querySelector("ul.balanceul").classList.remove("hidden");
        document.querySelector("ul.balanceul").classList.add("block");
      })
      document.querySelector("div.balance").addEventListener("mouseleave", function () {
        document.querySelector("ul.balanceul").classList.add("hidden");
        document.querySelector("ul.balanceul").classList.remove("block");
      })
}
  
export default menu;