import { add } from './maths-fns';

export default nums => {
  let total = 0;

  for(let i = 0; i < nums.length; i++) {
    total = add(total, nums[i]);
  }

  return total;
};
