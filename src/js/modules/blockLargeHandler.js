export function handleBlockLargeResize() {
    const blockLargeElements = document.querySelectorAll(".block-large");
  
    if (blockLargeElements.length > 0) {
      const updateClass = () => {
        blockLargeElements.forEach((el) => {
          if (window.innerWidth <= 850) {
            el.classList.remove("block-large");
          } else {
            el.classList.add("block-large");
          }
        });
      };
  
      updateClass();
      window.addEventListener("resize", updateClass);
    }
  }