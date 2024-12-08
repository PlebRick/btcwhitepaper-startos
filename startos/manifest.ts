import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'btc-whitepaper',
  title: 'Bitcoin White Paper',
  license: 'mit',
  wrapperRepo: 'https://github.com/PlebRick/btcwhitepaper-startos/tree/master',
  upstreamRepo: 'https://github.com/Start9Labs/hello-world',
  supportSite: 'https://docs.start9.com/',
  marketingSite: 'https://start9.com/',
  donationUrl: 'https://donate.start9.com/',
  description: {
    short: 'View the Bitcoin whitepaper via StartOS.',
    long: 'BTCWhitepaper is a simple service to view the Bitcoin whitepaper on a StartOS server.',
  },
  assets: [],
  volumes: ['main'],
  images: {
    'btcwhitepaper': {
      source: {
        dockerTag: 'b1ackswan/btcwhitepaper',
      },
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: 'Optional alert to display before installing the service',
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
