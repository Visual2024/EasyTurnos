import { useContext } from 'react'
import { CalendarContext } from '../context/CalendarContext'
import { CalendarContextProps } from '../typescript/interface'

export const useCalendar = (): CalendarContextProps => {
	const context = useContext(CalendarContext)

	if (!context) {
		throw new Error(
			'useCalendar debe usarse dentro de un proveedor CalendarProvider'
		)
	}

	return context
}
