'use client'
import { useState, useEffect, useRef } from 'react'

interface Props {
  checkIn: Date | null
  checkOut: Date | null
  onSelect: (start: Date | null, end: Date | null) => void
  onClose: () => void
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
}

function isBeforeDay(a: Date, b: Date) {
  const ad = new Date(a.getFullYear(), a.getMonth(), a.getDate())
  const bd = new Date(b.getFullYear(), b.getMonth(), b.getDate())
  return ad < bd
}

function addMonths(date: Date, n: number) {
  return new Date(date.getFullYear(), date.getMonth() + n, 1)
}

function buildCalendarDays(year: number, month: number): (Date | null)[] {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (Date | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))
  return cells
}

const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const DAYS = ['Do','Lu','Ma','Mi','Ju','Vi','Sá']

function MonthGrid({
  viewDate,
  checkIn,
  checkOut,
  hovered,
  today,
  selecting,
  onDayClick,
  onDayHover,
}: {
  viewDate: Date
  checkIn: Date | null
  checkOut: Date | null
  hovered: Date | null
  today: Date
  selecting: 'start' | 'end'
  onDayClick: (d: Date) => void
  onDayHover: (d: Date | null) => void
}) {
  const cells = buildCalendarDays(viewDate.getFullYear(), viewDate.getMonth())

  function getRange() {
    const start = checkIn
    const end = checkOut ?? (selecting === 'end' ? hovered : null)
    return { start, end }
  }

  function getDayClass(day: Date): string {
    const { start, end } = getRange()
    const isPast = isBeforeDay(day, today)
    if (isPast) return 'cal-day-disabled text-white/25'

    const classes: string[] = []

    if (start && isSameDay(day, start)) classes.push('cal-day-start')
    else if (end && isSameDay(day, end)) classes.push('cal-day-end')
    else if (start && end && !isBeforeDay(day, start) && isBeforeDay(day, end)) {
      classes.push('cal-day-in-range text-white/80')
    } else {
      classes.push('text-white/70 hover:bg-white/10 rounded-full')
    }

    if (isSameDay(day, today) && !classes.includes('cal-day-start') && !classes.includes('cal-day-end')) {
      classes.push('cal-day-today rounded-full')
    }

    return classes.join(' ')
  }

  return (
    <div className="flex-1 min-w-[260px]">
      <p className="text-center text-white font-semibold text-sm mb-4">
        {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
      </p>
      <div className="grid grid-cols-7 gap-0.5 mb-2">
        {DAYS.map((d) => (
          <div key={d} className="text-center text-white/30 text-xs py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((day, i) => (
          <div key={i} className="aspect-square flex items-center justify-center">
            {day ? (
              <button
                onClick={() => !isBeforeDay(day, today) && onDayClick(day)}
                onMouseEnter={() => onDayHover(day)}
                onMouseLeave={() => onDayHover(null)}
                className={`w-8 h-8 text-xs transition-all duration-150 ${getDayClass(day)}`}
              >
                {day.getDate()}
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export function DateRangePicker({ checkIn, checkOut, onSelect, onClose }: Props) {
  const [viewMonth, setViewMonth] = useState(new Date())
  const [selecting, setSelecting] = useState<'start' | 'end'>(checkIn ? 'end' : 'start')
  const [hovered, setHovered] = useState<Date | null>(null)
  const today = new Date()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [onClose])

  function handleDayClick(day: Date) {
    if (selecting === 'start') {
      onSelect(day, null)
      setSelecting('end')
    } else {
      if (checkIn && isBeforeDay(day, checkIn)) {
        onSelect(day, null)
        setSelecting('end')
      } else {
        onSelect(checkIn, day)
        setSelecting('start')
        onClose()
      }
    }
  }

  const nextMonth = addMonths(viewMonth, 1)

  return (
    <div
      ref={ref}
      className="absolute top-full left-0 mt-2 z-50 casitas-glass-card rounded-2xl p-4 md:p-6 shadow-2xl border border-white/15 min-w-[300px] md:min-w-[580px]"
    >
      {/* Header tabs */}
      <div className="flex gap-4 mb-4 border-b border-white/10 pb-4">
        <button
          onClick={() => setSelecting('start')}
          className={`flex-1 text-left px-3 py-2 rounded-xl transition-all ${selecting === 'start' ? 'bg-white/10 border border-[#C5A55A]/40' : 'border border-transparent'}`}
        >
          <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Check-in</p>
          <p className="text-white font-medium text-sm">
            {checkIn ? checkIn.toLocaleDateString('es-CR', { day: 'numeric', month: 'short' }) : 'Seleccionar'}
          </p>
        </button>
        <button
          onClick={() => checkIn && setSelecting('end')}
          className={`flex-1 text-left px-3 py-2 rounded-xl transition-all ${selecting === 'end' ? 'bg-white/10 border border-[#C5A55A]/40' : 'border border-transparent'}`}
        >
          <p className="text-white/40 text-xs uppercase tracking-widest mb-0.5">Check-out</p>
          <p className="text-white font-medium text-sm">
            {checkOut ? checkOut.toLocaleDateString('es-CR', { day: 'numeric', month: 'short' }) : 'Seleccionar'}
          </p>
        </button>
      </div>

      {/* Month navigation */}
      <div className="flex items-center justify-between mb-2 px-1">
        <button
          onClick={() => setViewMonth(addMonths(viewMonth, -1))}
          className="text-white/50 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button
          onClick={() => setViewMonth(addMonths(viewMonth, 1))}
          className="text-white/50 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>

      {/* Calendars */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <MonthGrid
          viewDate={viewMonth}
          checkIn={checkIn}
          checkOut={checkOut}
          hovered={hovered}
          today={today}
          selecting={selecting}
          onDayClick={handleDayClick}
          onDayHover={setHovered}
        />
        <div className="hidden md:block w-px bg-white/10" />
        <MonthGrid
          viewDate={nextMonth}
          checkIn={checkIn}
          checkOut={checkOut}
          hovered={hovered}
          today={today}
          selecting={selecting}
          onDayClick={handleDayClick}
          onDayHover={setHovered}
        />
      </div>

      {/* Clear */}
      {(checkIn || checkOut) && (
        <div className="mt-4 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={() => { onSelect(null, null); setSelecting('start') }}
            className="text-white/40 hover:text-white text-xs underline transition-colors"
          >
            Limpiar fechas
          </button>
        </div>
      )}
    </div>
  )
}
