import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MONTHS } from "@/lib/constants";
import React from "react";

export default function Headers({
  year,
  setYear,
  month,
  setMonth,
  onChange,
  maxDate,
  minDate,
}: {
  year: number;
  setYear: Function;
  month: Date;
  setMonth: Function;
  onChange: Function;
  maxDate: Date;
  minDate: Date;
}) {
  const years = React.useMemo(() => {
    const startYear = minDate.getFullYear();
    const endYear = maxDate.getFullYear();
    return Array.from(
      { length: endYear - startYear + 1 },
      (_, i) => startYear + i,
    );
  }, [minDate, maxDate]);

  const handleMonthChange = (newMonthIndex: number) => {
    if (newMonthIndex < 0 || newMonthIndex > 11) return;
    const newMonth = new Date(year, newMonthIndex, 1);
    setMonth(newMonth);
    onChange(newMonth);
  };

  const handleYearChange = (newYear: number) => {
    if (newYear < minDate.getFullYear() || newYear > maxDate.getFullYear())
      return;
    const newDate = new Date(newYear, month.getMonth(), 1);
    setYear(newYear);
    setMonth(newDate);
    onChange(newDate);
  };

  return (
    <div className="flex items-center justify-between px-4 pt-2">
      <Select
        value={String(month.getMonth())}
        onValueChange={(val) => handleMonthChange(parseInt(val))}
      >
        <SelectTrigger id={`month`} className="h-[34px] w-[120px]">
          <SelectValue placeholder="Month" />
        </SelectTrigger>
        <SelectContent>
          {MONTHS.map((label, i) => (
            <SelectItem key={i} value={String(i)}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={String(year)}
        onValueChange={(val) => handleYearChange(parseInt(val))}
      >
        <SelectTrigger id={`year`} className="h-[34px] w-[100px]">
          <SelectValue placeholder="Year" />
        </SelectTrigger>
        <SelectContent>
          {years.map((yearOption) => (
            <SelectItem key={yearOption} value={String(yearOption)}>
              {yearOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
