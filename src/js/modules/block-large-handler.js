export function handleBlockLargeResize() {
    const blockLargeElements = document.querySelectorAll(".block_large");
  
    if (blockLargeElements.length > 0) {
      const updateClass = () => {
        blockLargeElements.forEach((el) => {
          if (window.innerWidth <= 850) {
            el.classList.remove("block_large");
          } else {
            el.classList.add("block_large");
          }
        });
      };
  
      updateClass();
      window.addEventListener("resize", updateClass);
    }
  }