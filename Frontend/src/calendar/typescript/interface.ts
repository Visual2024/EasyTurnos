/* eslint-disable @typescript-eslint/no-explicit-any */
import { PickersDayProps } from '@mui/x-date-pickers/PickersDay'
import { Moment } from 'moment'

type CustomPointerEnterHandler = (
	event: React.PointerEvent<HTMLButtonElement>,
	day: Moment
) => void

export interface CustomDayProps extends PickersDayProps<Moment> {
	selectedDay: Moment | null
	hoveredDay: Moment | null
	onPointerEnter: React.PointerEventHandler<HTMLButtonElement>
	onPointerLeave: React.PointerEventHandler<HTMLButtonElement>
	slots: ConfigSlot[]
	appointments: Appointment[]
	onCustomPointerEnter?: CustomPointerEnterHandler
}

export interface ConfigSlot {
	end: string
	startDate: string
	endDate: string
	id: string
}

export interface Appointment {
	id: string
	name: string
	startDate: string
	endDate: string
}

export type PointerEnterHandler = (
	event: React.PointerEvent<HTMLButtonElement>,
	day: Moment
) => void

export interface CustomDayProps extends PickersDayProps<Moment> {
	selectedDay: Moment | null
	hoveredDay: Moment | null
	onPointerEnter: React.PointerEventHandler<HTMLButtonElement>
	onPointerLeave: React.PointerEventHandler<HTMLButtonElement>
	slots: ConfigSlot[]
	appointments: Appointment[]
}

export interface ClientsByProfessional {}

export interface CalendarContextProps {
	selectedDate: Moment | null
	hoveredDay: Moment | null
	setHoveredDay: (day: Moment | null) => void
	slots: ConfigSlot[]
	selectedSlots: ConfigSlot[]
	selectedSlot: ConfigSlot | null
	showConfirmButton: boolean
	appointmentsForSelectedDate: any[]
	handleDateChange: (date: Moment | null) => void
	handleConfigChange: (newSlots: ConfigSlot[]) => void
	handleSlotClick: (slot: ConfigSlot) => void
	handleDeleteSlot: (id: string) => void
	handleCreateAppointment: (clientId: string, title: string) => void
	appointments: any[]
	handleDeleteAppointment: (id: string) => void
	setClientForAppointment: (clientId: string) => void
	handleCreateClientAppointment: (title: string) => void
	professionalClients: ClientsByProfessional | null
	clientProfessional: ClientsByProfessional | null
	handleClientDeleteAppointment: any
}
