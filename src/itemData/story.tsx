import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import { color } from '../_utils/branding'
import Button, { ButtonStatus } from '../button'
import InfoIcon from '../icon/infoIcon'
import ItemData from '../itemData'
import Section from '../layout/section/baseSection'

const stories = storiesOf('Widgets|ItemData', module)
stories.addDecorator(withKnobs)

stories.add('Default', () => {
  const ismainTitleButtonAddon = boolean('Title button info', true)
  const dataStrikeThrough = boolean('Data strikethrough', false)

  return (
    <Section>
      <ItemData
        mainTitle={text('Main title')}
        aria-label={text('Aria label', 'Complementary info')}
        mainInfo={text('Main info', 'Main information')}
        data={text('Data', 'Data')}
        dataInfo={text('Data info')}
        dataAriaProps={{ 'aria-label': text('Data aria label', 'Data aria label') }}
        dataStrikeThrough={dataStrikeThrough}
        disabled={boolean('Disabled', false)}
        mainTitleButtonAddon={
          ismainTitleButtonAddon ? (
            <Button status={ButtonStatus.UNSTYLED} isBubble onClick={action('Info clicked')}>
              <InfoIcon iconColor={color.blue} title="More info" />
            </Button>
          ) : null
        }
        tag={<li />}
      />
    </Section>
  )
})
