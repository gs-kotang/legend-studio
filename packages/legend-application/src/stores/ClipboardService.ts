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

import type { GenericLegendApplicationStore } from './ApplicationStore.js';

export class ClipboardService {
  readonly applicationStore: GenericLegendApplicationStore;

  constructor(applicationStore: GenericLegendApplicationStore) {
    this.applicationStore = applicationStore;
  }

  async copyTextToClipboard(text: string): Promise<void> {
    // This is a much cleaner way which requires HTTPS
    // See https://developers.google.com/web/updates/2018/03/clipboardapi
    await navigator.clipboard.writeText(text).catch((error) => {
      this.applicationStore.notificationService.notifyError(error);
    });
  }
}
