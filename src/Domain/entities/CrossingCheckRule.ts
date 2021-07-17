import { ICrossingCheckRule } from '../types/ICrossingCheckRule';
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

  constructor(props: ICrossingCheckRule) {
    this.name = props.name;
    this.status = props.status;
    this.interval = props.interval;
    this.preAction = props.preAction;
    this.afterAction = props.afterAction;
    Object.freeze(this);
  }
}
