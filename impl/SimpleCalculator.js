// @flow
"use strict";

import {Calculator} from '../api/Calculator';

export default class SimpleCalculator
  implements Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
