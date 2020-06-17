import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

import { SelectField } from '../selectField'

export default {
  title: 'Forms|SelectField',
  component: SelectField,
}

const phonePrefixOptions = [
  { value: '+33', label: 'Fr +33', ariaLabel: 'France' },
  { value: '+34', label: 'Sp +34' },
]

const ref = React.createRef<HTMLSelectElement>()

export const Basic = () => (
  <SelectField
    id={text('id', 'selectFieldId')}
    name={text('name', 'selectFieldName')}
    className={text('className', 'additionalClass')}
    options={phonePrefixOptions}
    ariaLabel={text('ariaLabel', 'selectLabel')}
    defaultValue={text('defaultValue', phonePrefixOptions[0].value)}
    onFocus={action('focused')}
    onBlur={action('blured')}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
    required={boolean('required', false)}
    focus={boolean('focus', true)}
    autoFocus={boolean('autoFocus', false)}
    ref={ref}
  />
)
