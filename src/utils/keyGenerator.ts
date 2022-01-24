import random from "lodash/random";

export const generateKey = (pre: string) => {
  return `${pre}_${random(0, 100000)}`;
};
