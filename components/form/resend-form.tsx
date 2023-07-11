"use client";

import { Label } from "./elements/labels";
import { Input, Submit } from "./elements/inputs";
import { InputFormGroup, LabelFormGroup } from "./elements/form-group";

export function ResendForm() {
  return (
    <form className="table pt-[5px]">
      <div className="table-row">
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" />
      </div>
      <div className="table-row">
        <LabelFormGroup />
        <InputFormGroup>
          <Submit value="Reset my password" />
        </InputFormGroup>
      </div>
      <div className="h-[20px]"></div>
    </form>
  );
}
