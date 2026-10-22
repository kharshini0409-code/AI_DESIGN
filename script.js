/* ==============================
   MOBILE NAVIGATION
============================== */

const menuButton =
  document.getElementById("menu-button");

const navigation =
  document.getElementById("navigation");


if (menuButton && navigation) {

  menuButton.addEventListener(
    "click",
    () => {

      navigation.classList.toggle("open");

    }
  );


  navigation
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        () => {

          navigation.classList.remove("open");

        }
      );

    });

}