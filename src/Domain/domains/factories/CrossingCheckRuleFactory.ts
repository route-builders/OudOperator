import { CrossingCheckRule } from '../models/CrossingCheckRule';
import { CrossingCheckRuleValue } from '../types/ICrossingCheckRule';
import { CrossingCheckRuleAfterAction } from '../values/CrossingCheckRule/CrossingCheckRuleAfterAction';
import { CrossingCheckRuleInterval } from '../values/CrossingCheckRule/CrossingCheckRuleInterval';
import { CrossingCheckRuleName } from '../values/CrossingCheckRule/CrossingCheckRuleName';
import { CrossingCheckRulePreAction } from '../values/CrossingCheckRule/CrossingCheckRulePreAction';
import { CrossingCheckRuleStatus } from '../values/CrossingCheckRule/CrossingCheckRuleStatus';

export class CrossingCheckRuleFactory {
  static from(values: CrossingCheckRuleValue): CrossingCheckRule {
    const { name, status, interval, preAction, afterAction } = values;

    return new CrossingCheckRule({
      name: new CrossingCheckRuleName(name),
      status: new CrossingCheckRuleStatus(status),
      interval: new CrossingCheckRuleInterval(interval),
      preAction: new CrossingCheckRulePreAction(preAction),
      afterAction: new CrossingCheckRuleAfterAction(afterAction),
    });
  }
}
