// @flow
"use strict";

import {describe} from 'mocha';

import testCalculatorContract from '../api/Calculator';
import SimpleCalculator from '../impl/SimpleCalculator';

describe('SimpleCalculator', function () {
  const sut: SimpleCalculator = new SimpleCalculator();
  testCalculatorContract(sut);

  // other tests ...
});