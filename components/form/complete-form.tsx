"use client";

import { Label } from "./elements/labels";
import { Input, Submit } from "./elements/inputs";
import { InputFormGroup, LabelFormGroup } from "./elements/form-group";

export function CompleteForm() {
  return (
    <form className="table pt-[5px]">
      <div className="table-row">
        <Label htmlFor="phone">Phone number:</Label>
        <Input type="text" id="phone" />
      </div>
      <div className="table-row">
        <LabelFormGroup />
        <InputFormGroup>
          <Submit value="Continue" />
        </InputFormGroup>
      </div>
      <div className="h-[20px]"></div>
    </form>
  );
}
