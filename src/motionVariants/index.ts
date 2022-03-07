export const motionTitleVar = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2 },
  }),
};
