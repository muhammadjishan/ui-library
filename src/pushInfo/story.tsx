import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../_utils/branding'
import { ProximityIcon } from '../icon/proximityIcon'
import { BaseSection as Section } from '../layout/section/baseSection'
import { PushInfo } from './index'

const stories = storiesOf('Widgets|PushInfo', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Section>
    <PushInfo
      headline={text('headline', "If it's green it's a win!")}
      content={text('content', 'Green icons show meeting points closest to you!')}
    />
  </Section>
))

stories.add('with icon', () => (
  <Section>
    <PushInfo
      icon={<ProximityIcon iconColor={color.green} title="" />}
      headline={text('headline', "If it's green it's a win!")}
      content={text('content', 'Green icons show meeting points closest to you!')}
    />
  </Section>
))
