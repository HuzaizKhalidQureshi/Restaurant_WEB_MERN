import { useEffect } from "react";
import { data } from "../restApi.json";

const Menu = () => {
  useEffect(() => {
    const handleMenuScroll = () => {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        window.scrollTo({
          top: menuSection.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    };

    const menuBtn = document.querySelector(".menuBtn");
    if (menuBtn) {
      menuBtn.addEventListener("click", handleMenuScroll);
    }

    return () => {
      if (menuBtn) {
        menuBtn.removeEventListener("click", handleMenuScroll);
      }
    };
  }, []);

  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
              iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta
              pariatur eius et recusandae veritatis. Quasi, et molestias!
            </p>
          </div>
          <div className="dishes_container">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
