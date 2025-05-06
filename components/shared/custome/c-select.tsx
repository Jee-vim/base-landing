import CSelectField from "./c-select-field";

interface CSelects extends CSelect {
  form: any;
  name: string;
}

export default function CSelect({
  label,
  className,
  classNameParent,
  placeholder,
  options,
  form,
  name,
  iconSvg,
  iconImg,
  iconSize,
}: CSelects) {
  return (
    <form.Field
      name={name}
      validators={form.validators}
      children={(field: any) => {
        return (
          <CSelectField
            className={className}
            classNameParent={classNameParent}
            placeholder={placeholder}
            label={label}
            value={field.state.value as string}
            field={field}
            onChange={(e) => field.handleChange(e)}
            options={options}
            iconSvg={iconSvg}
            iconImg={iconImg}
            iconSize={iconSize}
          />
        );
      }}
    />
  );
}
