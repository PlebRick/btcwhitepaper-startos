import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
import { config } from '../actions/config'

export const v0360 = VersionInfo.of({
  version: '0.3.6:0',
  releaseNotes: 'Revamped for StartOS 0.3.6',
  migrations: {
    up: async ({ effects }) => {
      // require the user to run the "config" action
      await sdk.action.requestOwn(effects, config, 'critical')
    },
    down: IMPOSSIBLE,
  },
})
