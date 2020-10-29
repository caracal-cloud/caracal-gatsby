import './src/global.css'
import './src/antd.less'

import { registerLinkResolver } from 'gatsby-source-prismic-graphql'
import { linkResolver } from './src/utils/link-resolver'

registerLinkResolver(linkResolver)
