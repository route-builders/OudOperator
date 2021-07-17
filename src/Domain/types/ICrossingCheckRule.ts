import {
  CrossingCheckRuleAfterAction,
  CrossingCheckRuleAfterActionValue,
} from '../values/CrossingCheckRule/CrossingCheckRuleAfterAction';
import {
  CrossingCheckRuleInterval,
  CrossingCheckRuleIntervalValue,
} from '../values/CrossingCheckRule/CrossingCheckRuleInterval';
import { CrossingCheckRuleName, CrossingCheckRuleNameValue } from '../values/CrossingCheckRule/CrossingCheckRuleName';
import {
  CrossingCheckRulePreAction,
  CrossingCheckRulePreActionValue,
} from '../values/CrossingCheckRule/CrossingCheckRulePreAction';
import {
  CrossingCheckRuleStatus,
  CrossingCheckRuleStatusValue,
} from '../values/CrossingCheckRule/CrossingCheckRuleStatus';

/**
 * @type CrossingCheckRuleValue - native型からなる、交差支障判定ルールの型
 * エンティティ生成用の型。
 */
export type CrossingCheckRuleValue = {
  name: CrossingCheckRuleNameValue;
  status: CrossingCheckRuleStatusValue;
  interval: CrossingCheckRuleIntervalValue;
  preAction: CrossingCheckRulePreActionValue;
  afterAction: CrossingCheckRuleAfterActionValue;
};

/**
 * @type ICrossingCheckRule - 交差支障判定ルールentityの型
 */
export interface ICrossingCheckRule {
  name: CrossingCheckRuleName;
  status: CrossingCheckRuleStatus;
  interval: CrossingCheckRuleInterval;
  preAction: CrossingCheckRulePreAction;
  afterAction: CrossingCheckRuleAfterAction;
}
