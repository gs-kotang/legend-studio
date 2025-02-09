/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { type Hashable, hashArray } from '@finos/legend-shared';
import { MASTERY_HASH_STRUCTURE } from '../../../../../../../graph/DSL_Mastery_HashUtils.js';
import type { V1_DataProviderType } from './V1_DSL_Mastery_DataProviderType.js';

export abstract class V1_RuleScope implements Hashable {
  _type!: V1_RuleScopeType;
  abstract get hashCode(): string;
}

export class V1_RecordSourceScope extends V1_RuleScope {
  recordSourceId!: string;

  override get hashCode(): string {
    return hashArray([
      MASTERY_HASH_STRUCTURE.RECORD_SOURCE_SCOPE,
      this.recordSourceId,
    ]);
  }
}

export class V1_DataProviderIdScope extends V1_RuleScope {
  dataProviderId!: string;

  override get hashCode(): string {
    return hashArray([
      MASTERY_HASH_STRUCTURE.DATA_PROVIDER_ID_SCOPE,
      this.dataProviderId,
    ]);
  }
}

export class V1_DataProviderTypeScope extends V1_RuleScope {
  dataProviderType!: V1_DataProviderType;

  override get hashCode(): string {
    return hashArray([
      MASTERY_HASH_STRUCTURE.DATA_PROVIDER_TYPE_SCOPE,
      this.dataProviderType,
    ]);
  }
}

export enum V1_RuleScopeType {
  DATA_PROVIDER_ID_SCOPE = 'dataProviderIdScope',
  DATA_PROVIDER_TYPE_SCOPE = 'dataProviderTypeScope',
  RECORD_SOURCE_SCOPE = 'recordSourceScope',
}
