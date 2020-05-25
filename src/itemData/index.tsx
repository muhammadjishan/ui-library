import React from 'react'

import { A11yProps, pickA11yProps } from '../_utils/interfaces'
import Item from '../_utils/item'
import Button from '../button/Button'
import { TextDisplayType } from '../text'

export interface ItemDataProps extends A11yProps {
  readonly data: string | JSX.Element
  readonly dataStrikeThrough?: boolean
  readonly dataAriaProps?: A11yProps
  readonly mainInfo: React.ReactNode
  readonly className?: string
  readonly mainTitle?: string
  readonly mainTitleButtonAddon?: React.ReactElement<Button>
  readonly dataInfo?: string
  readonly tag?: JSX.Element
  readonly disabled?: boolean
}

const ItemData = (props: ItemDataProps) => {
  const {
    mainInfo,
    data,
    dataStrikeThrough,
    dataAriaProps,
    className,
    mainTitle,
    mainTitleButtonAddon,
    dataInfo,
    tag,
    disabled,
  } = props
  const a11yAttrs = pickA11yProps<ItemDataProps>(props)
  return (
    <Item
      className={className}
      leftTitle={mainTitle}
      leftTitleButtonAddon={mainTitleButtonAddon}
      leftBody={mainInfo}
      rightTitle={data}
      rightTitleStrikeThrough={dataStrikeThrough}
      rightTitleAriaProps={dataAriaProps}
      rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
      rightBody={dataInfo}
      tag={tag}
      disabled={disabled}
      {...a11yAttrs}
    />
  )
}

export default ItemData
