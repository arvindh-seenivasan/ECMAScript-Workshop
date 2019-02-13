import { divide } from './maths-fns';
import sumList from './sum-list';

export default nums => divide( sumList(nums), nums.length );
