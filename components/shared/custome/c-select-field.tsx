import { Label } from "@/components/ui/label";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CSelectField extends CSelect {
  value: string;
  onChange: (value: string) => void;
}

export default function CSelectField({
  label,
  className,
  classNameParent,
  placeholder,
  options,
  value,
  onChange,
  field,
  iconSize,
  iconImg,
  iconSvg,
}: CSelectField) {
  const isError = field && field.state.meta.errors.length;
  return (
    <div className={cn("w-full", classNameParent)}>
      {label && <Label>{label}</Label>}
      <Select value={value} onValueChange={(e) => onChange(e)}>
        <div className={cn("relative", field && "mb-[25px]")}>
          <SelectTrigger
            className={cn(className, "relative", {
              "border-red-500! focus-visible:ring-red-500!": isError,
            })}
          >
            <div className="absolute top-1/2 left-3 -translate-y-1/2">
              {iconSvg && iconSvg}
              {iconImg && (
                <Image
                  src={iconImg}
                  alt="icon"
                  width={iconSize || 20}
                  height={iconSize || 20}
                  className="shrink-0"
                />
              )}
            </div>
            <span
              className={cn({
                "pl-6": iconSvg,
                "pl-10": iconImg,
              })}
            >
              <SelectValue placeholder={placeholder} />
            </span>
          </SelectTrigger>
          {isError ? (
            <em className="absolute left-0 bottom-[-20px] text-xs text-red-500">
              {field.state.meta.errors?.map((err: any) => err.message)?.[0]}
            </em>
          ) : null}
        </div>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className="text-foreground"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
