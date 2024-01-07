import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@ixs-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/italoxs.png',
    alt: 'Italo Sales',
  },

  tags: ['autodocs'],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
