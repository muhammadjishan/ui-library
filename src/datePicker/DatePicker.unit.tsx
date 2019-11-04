import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import DayPicker, { NavbarElementProps, CaptionElementProps } from 'react-day-picker'
import DatePicker, { DatePickerOrientation } from './DatePicker'

describe('DatePicker', () => {
  describe('renderNavbar', () => {
    const navbarProps: Partial<NavbarElementProps> = {
      className: '',
      showNextButton: true,
      showPreviousButton: true,
      onPreviousClick() {},
      onNextClick() {},
    }
    it('Should render the weekdays in vertical mode', () => {
      const datepicker = shallow(
        <DatePicker name="datepicker" orientation={DatePickerOrientation.VERTICAL} />,
      )
      const navbar = renderer.create(datepicker.instance().renderNavbar(navbarProps))
      expect(navbar).toMatchSnapshot()
    })

    it('Should render the previous/next buttons in horizontal mode', () => {
      const datepicker = shallow(
        <DatePicker name="datepicker" orientation={DatePickerOrientation.HORIZONTAL} />,
      )
      const navbar = renderer.create(datepicker.instance().renderNavbar(navbarProps))
      expect(navbar).toMatchSnapshot()
    })
  })

  describe('renderCaption', () => {
    const currentYear = new Date().getFullYear()
    const datepicker = shallow(<DatePicker name="datepicker" />)
    const captionProps: Partial<CaptionElementProps> = {
      date: new Date(currentYear, 0, 1),
      localeUtils: {
        ...DayPicker.LocaleUtils,
        formatMonthTitle: datepicker.instance().formatMonthTitle,
      },
    }
    it('Should render the given month title', () => {
      const caption = renderer.create(datepicker.instance().renderCaption(captionProps))
      expect(caption).toMatchSnapshot()
    })
    it('Should render the given month title with year if it is not the current year', () => {
      const futureYearProps = { ...captionProps, date: new Date(2050, 0, 1) }
      const caption = renderer.create(datepicker.instance().renderCaption(futureYearProps))
      expect(caption).toMatchSnapshot()
    })
  })

  describe('onChange', () => {
    it('Should return the date in the format `YYYY-MM-DD`', () => {
      const onChange = jest.fn()
      const date = new Date(2020, 0, 1)
      const wrapper = shallow(<DatePicker name="datepicker" onChange={onChange} />)
      wrapper.instance().onDayClick(date, {})
      expect(onChange).toHaveBeenCalledWith({ name: 'datepicker', value: '2020-01-01' })
    })
  })
})