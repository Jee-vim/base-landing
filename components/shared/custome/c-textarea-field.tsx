import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Textarea from "@/components/ui/textarea";

export default function CTextareaField({
  className,
  classNameParent,
  label,
  iconSvg,
  iconImg,
  iconSize,
  field,
  ...props
}: IFieldInput) {
  const isError = field && field.state.meta.errors.length;
  const { value, ...rest } = props;
  return (
    <div className={cn("w-full", classNameParent)}>
      {label && <Label>{label}</Label>}
      <div className={cn("relative", field && "mb-[25px]")}>
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
        <Textarea
          value={String(value ?? "")}
          placeholder={props.placeholder}
          className={cn(className, {
            "pl-9": iconSvg,
            "pl-10": iconImg,
          })}
          checked={props.checked}
          isError={isError}
          {...rest}
        />
        {isError ? (
          <em className="absolute left-0 bottom-[-20px] text-xs text-red-500">
            {field.state.meta.errors?.map((err: any) => err.message)?.[0]}
          </em>
        ) : null}
      </div>
    </div>
  );
}
