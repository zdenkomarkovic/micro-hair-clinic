import { useTransform, useMotionValue } from "framer-motion";

export const useCardAnimation = (
  index: number,
  titleHeight: number,
  screenHeight: number,
  scrollY: any
) => {
  const start = titleHeight + index * screenHeight;
  const end = titleHeight + (index + 1) * screenHeight;

  const scale = useTransform(scrollY, [start, end], [1, 0.8]);
  const opacity = useTransform(scrollY, [start, end], [1, 0]);

  return { scale, opacity };
};
