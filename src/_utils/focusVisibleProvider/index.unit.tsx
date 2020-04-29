import React, { useContext } from 'react'
import { act } from 'react-dom/test-utils'
import { mount, ReactWrapper } from 'enzyme'

import FocusVisibleProvider, { FocusVisibleContext } from '.'
import { KEYS } from '_utils/keycodes'

let focusVisibleContext = null
let wrapper: ReactWrapper
const ChildComponent = () => {
  focusVisibleContext = useContext(FocusVisibleContext)
  return null
}

describe('FocusVisibleProvider', () => {
  beforeEach(() => {
    wrapper = mount(
      <FocusVisibleProvider>
        <ChildComponent />
      </FocusVisibleProvider>,
    )
  })
  afterEach(() => {
    focusVisibleContext = null
  })

  it('Should provide "false" value for keyboard navigation context on mounting', () => {
    expect(focusVisibleContext).toEqual(false)
  })

  it('Should update the context value by switching from keyboard to pointer interaction', () => {
    act(() => {
      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: KEYS.TAB }))
    })
    wrapper.update()
    expect(focusVisibleContext).toEqual(true)

    act(() => {
      document.body.dispatchEvent(new MouseEvent('mousedown'))
    })
    wrapper.update()
    expect(focusVisibleContext).toEqual(false)
  })

  it('Should provide "false" value when using not whitelisted key', () => {
    act(() => {
      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Alt' }))
    })
    wrapper.update()
    expect(focusVisibleContext).toEqual(false)
  })
})