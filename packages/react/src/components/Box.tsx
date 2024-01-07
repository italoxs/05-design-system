/* eslint-disable @typescript-eslint/no-empty-interface */
import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  bortder: '1px solid $gray600',
})

//
export interface BoxProps extends ComponentProps<typeof Box> {}

Box.displayName = 'Box'
