// tslint:disable:max-line-length
import React from 'react'

import { BaseIcon, BaseIconDefaultProps, Icon } from '../_utils/icon'

export const BellIcon = (props: Icon) => (
  <BaseIcon {...props}>
    <path d="M21.916,20.223C21.896,20.194,20,17.305,20,13.5v-5C20,4.294,16.706,1,12.5,1C8.294,1,5,4.294,5,8.5v5c0,3.791-1.897,6.694-1.917,6.723c-0.102,0.154-0.111,0.352-0.024,0.514S3.316,21,3.5,21h5.549c0.238,1.715,1.661,3,3.451,3c1.791,0,3.213-1.285,3.451-3H21.5c0.185,0,0.354-0.102,0.44-0.264C22.028,20.573,22.019,20.376,21.916,20.223z M12.5,23c-1.253,0-2.233-0.831-2.453-2h4.905C14.733,22.169,13.752,23,12.5,23z M4.365,20C4.978,18.827,6,16.435,6,13.5v-5C6,4.855,8.855,2,12.5,2C16.145,2,19,4.855,19,8.5v5c0,2.935,1.021,5.327,1.636,6.5H4.365z" />
  </BaseIcon>
)

BellIcon.defaultProps = BaseIconDefaultProps
export default BellIcon
