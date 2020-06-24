import React from 'react'
import cc from 'classcat'

import { Item } from '../../../_internals/item'
import { Divider } from '../../../divider'
import { StandardSeatIcon as StandardSeat } from '../../../icon/standardSeat'
import { Stepper, StepperDisplay, StepperProps } from '../../../stepper'

export interface StepperOverlayProps extends StepperProps {
  itemTitle: string
}

export const StepperOverlay = ({ itemTitle, className, ...props }: StepperOverlayProps) => (
  <div className={cc(['kirk-stepperOverlay', className])}>
    <Item leftAddon={<StandardSeat />} leftTitle={itemTitle} />
    <Divider />
    <Stepper
      {...props}
      className="kirk-stepperOverlay-stepper"
      display={StepperDisplay.LARGE}
      focus
    />
  </div>
)
