"use client";

import CInputField from "./c-input-field";

export default function CInput({
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
          <CInputField
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
