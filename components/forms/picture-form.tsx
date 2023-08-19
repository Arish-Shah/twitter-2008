import Image from "next/image";
import { Form } from "../ui/form";
import { Submit } from "../ui/input";

interface PictureFormProps {}

export function PictureForm({}: PictureFormProps) {
  return (
    <Form className="pl-[10px]">
      <Form.Row>
        <Form.LabelGroup className="pt-[5px]">
          <Image
            src="/images/profile/default_profile.png"
            alt="Profile picture"
            height={48}
            width={48}
            quality={100}
            className="inline-block"
          />
        </Form.LabelGroup>
        <Form.InputGroup>
          <input type="file" name="" id="" />
          <Form.Subtext className="block">
            Maximum size of 700k. JPG, GIF, PNG.
          </Form.Subtext>
        </Form.InputGroup>
      </Form.Row>
      <Form.Row>
        <Form.LabelGroup />
        <Form.InputGroup>
          <Submit value="Save" />
          <Submit value="Delete current" className="ml-[5px]" />
        </Form.InputGroup>
      </Form.Row>
    </Form>
  );
}
