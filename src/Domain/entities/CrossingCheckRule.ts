import { CrossingCheckRuleValue, ICrossingCheckRule } from '../types/ICrossingCheckRule';
import { CrossingCheckRuleAfterAction } from '../values/CrossingCheckRule/CrossingCheckRuleAfterAction';
import { CrossingCheckRuleInterval } from '../values/CrossingCheckRule/CrossingCheckRuleInterval';
import { CrossingCheckRuleName } from '../values/CrossingCheckRule/CrossingCheckRuleName';
import { CrossingCheckRulePreAction } from '../values/CrossingCheckRule/CrossingCheckRulePreAction';
import { CrossingCheckRuleStatus } from '../values/CrossingCheckRule/CrossingCheckRuleStatus';

/**
 * @class CrossingCheckRule - 交差支障判定ルールentity
 *
 * @supports oudiasecond v2.06
 * @original CrossingCheckRule
 */
export class CrossingCheckRule implements ICrossingCheckRule {
  public readonly name: CrossingCheckRuleName;
  public readonly status: CrossingCheckRuleStatus;
  public readonly interval: CrossingCheckRuleInterval;
  public readonly preAction: CrossingCheckRulePreAction;
  public readonly afterAction: CrossingCheckRuleAfterAction;

  constructor(props: CrossingCheckRuleValue) {
    this.name = new CrossingCheckRuleName(props.name);
    this.status = new CrossingCheckRuleStatus(props.status);
    this.interval = new CrossingCheckRuleInterval(props.interval);
    this.preAction = new CrossingCheckRulePreAction(props.preAction);
    this.afterAction = new CrossingCheckRuleAfterAction(props.afterAction);
    Object.freeze(this);
  }
}
