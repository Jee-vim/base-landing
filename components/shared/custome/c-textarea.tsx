"use client";

import CTextareaField from "./c-textarea-field";

export default function CTextarea({
  name,
  validators,
  label,
  form,
  field,
  iconSvg,
  iconImg,
  iconSize,
  ...props
}: ICinput) {
  return (
    <form.Field
      name={name}
      validators={validators}
      children={(field: any) => {
        return (
          <CTextareaField
            label={label}
            name={name}
            value={field.state.value as string}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            iconSvg={iconSvg}
            iconImg={iconImg}
            iconSize={iconSize}
            field={field}
            {...props}
          />
        );
      }}
    />
  );
}
