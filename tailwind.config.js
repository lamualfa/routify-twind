const production = !process.env.ROLLUP_WATCH;

export default {
  hash: production,
  theme: {
    extend: {
      textColor: {
        primary: 'purple',
      },
    },
  },
};
