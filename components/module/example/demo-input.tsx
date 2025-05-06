"use client";
import { MdOutlineAttachEmail } from "react-icons/md";
import CButton from "@/components/shared/custome/c-button";
import CInput from "@/components/shared/custome/c-input";
import CInputField from "@/components/shared/custome/c-input-field";
import CSelect from "@/components/shared/custome/c-select";
import CSelectField from "@/components/shared/custome/c-select-field";
import { OPT_DUMMY } from "@/lib/constants";
import { UserSchema } from "@/lib/validation";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";
import CTextareaField from "@/components/shared/custome/c-textarea-field";
import CTextarea from "@/components/shared/custome/c-textarea";

export default function DemoInput() {
  const [payload, setPayload] = useState({
    search: "",
    type: "",
  });

  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      hobby: "",
    },
    validators: {
      onChange: UserSchema,
    },
    onSubmit: ({ value }) => {
      alert(JSON.stringify(value, null, 2));
    },
  });

  const handleChangeAsync = async ({ value }: { value: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return (
      value.includes("errors") && {
        message: 'No "errors" allowed in username',
      }
    );
  };

  return (
    <div className="size-full max-w-2xl mx-auto flex items-start justify-center gap-[8px]">
      <form
        className="size-full"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <CInput name="name" placeholder="Jhon Doe" form={form} />
        <CTextarea name="name" placeholder="Jhon Doe" form={form} />
        <CInput
          validators={{
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: handleChangeAsync,
          }}
          name="username"
          placeholder="jhon_doe"
          form={form}
        />
        <CInput
          iconSvg={<MdOutlineAttachEmail size={16} />}
          name="email"
          placeholder="example@gmail.com"
          form={form}
        />
        <CInput name="password" placeholder="password" form={form} />
        <CSelect
          name="hobby"
          placeholder="Hobby"
          options={OPT_DUMMY}
          form={form}
        />
        <CSelect
          name="hobby"
          placeholder="Hobby"
          options={OPT_DUMMY}
          form={form}
          iconSvg={<MdOutlineAttachEmail size={16} />}
        />
        <CButton title="Submit" type="submit" />
      </form>

      <div className="w-full grid grid-cols-1 gap-[8px]">
        <CInputField
          placeholder="ajsja"
          value={payload.search}
          onChange={(e) => setPayload({ ...payload, search: e.target.value })}
        />
        <CSelectField
          placeholder="select type"
          options={OPT_DUMMY}
          value={payload.type}
          onChange={(e) => setPayload({ ...payload, type: e })}
        />
        <CTextareaField
          placeholder="ajsja"
          value={payload.search}
          onChange={(e) => setPayload({ ...payload, search: e.target.value })}
        />
      </div>
    </div>
  );
}
