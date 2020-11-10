import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { SectionTitle } from 'systems/Core'

import * as st from './styled'
import { PlanBox } from './components/PlanBox'

import { useWindowDimensions } from '../WindowDimensionsProvider'

export const Pricing = ({ title }) => {
  const { isDesktop } = useWindowDimensions()

  return (
    <StaticQuery
      query={graphql`
        query PricingQuery {
          prismic {
            allPlans(sortBy: order_ASC) {
              edges {
                node {
                  _meta {
                    uid
                    id
                  }
                  features {
                    value
                  }
                  price
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: plans } = data.prismic.allPlans

        return (
          <st.Wrapper>
            <SectionTitle bg="lightGray.0" isDesktop={isDesktop}>
              <SectionTitle.Text color="gray.0" isDesktop={isDesktop}>
                {title}
              </SectionTitle.Text>
            </SectionTitle>
            <st.Container isDesktop={isDesktop}>
              {plans.map(({ node }) => (
                <PlanBox key={node._meta.uid} plan={node} />
              ))}
            </st.Container>
          </st.Wrapper>
        )
      }}
    />
  )
}
