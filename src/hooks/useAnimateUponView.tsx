import { useEffect } from "react";

const useAnimateUponView = (className: string, animationClass: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      });
    });

    const element = document.querySelector(`.${className}`);
    if (element) observer.observe(element);

    // Cleanup
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [className, animationClass]);
};

export default useAnimateUponView;
