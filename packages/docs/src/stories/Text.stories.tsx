import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@ixs-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores facilis, explicabo mollitia numquam id! Pariatur iusto cupiditate ullam facilis possimus eveniet, ab doloremque voluptatem, omnis, natus iure voluptates. Fuga?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
