import { Form } from "../ui/form";
import { Input, Select, Submit, TextArea } from "../ui/input";

interface HelpFormProps {}

const types = ["bug", "idea", "request", "spam request"];
const happened = [
  "just now",
  "an hour ago",
  "today",
  "this week",
  "some time ago",
];

export function HelpForm({}: HelpFormProps) {
  return (
    <Form>
      <ul>
        <li className="p-[5px_0]">
          This is a{" "}
          <Select className="text-[13.33px]">
            {types.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
          <span className="mr-[3px]">which happened</span>
          <Select className="text-[13.33px]">
            {happened.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </li>
        <li className="p-[8px_0]">
          <label htmlFor="name" className="block font-bold">
            Full Name{" "}
            <sup className="text-[10px] font-bold text-superscript">
              required
            </sup>
          </label>
          <Input type="text" id="name" />
        </li>
        <li className="p-[5px_0]">
          <label htmlFor="email" className="block font-bold">
            Email{" "}
            <sup className="text-[10px] font-bold text-superscript">
              required
            </sup>
          </label>
          <Input type="email" id="email" />
        </li>
        <li className="p-[5px_0]">
          <label htmlFor="phone" className="block font-bold">
            Phone Number
          </label>
          <Input type="text" id="phone" />
        </li>
        <li className="p-[5px_0]">
          <label htmlFor="what_did" className="block font-bold">
            This is what I DID
          </label>
          <TextArea
            cols={60}
            rows={3}
            className="font-mono !text-[12px]"
            id="what_did"
          />
        </li>
        <li className="p-[5px_0]">
          <label htmlFor="what_expected" className="block font-bold">
            This is what I EXPECTED to happen
          </label>
          <TextArea
            cols={60}
            rows={3}
            className="font-mono !text-[12px]"
            id="what_expected"
          />
        </li>
        <li className="p-[5px_0]">
          <label htmlFor="what_actually" className="block font-bold">
            This is what ACTUALLY happened
          </label>
          <TextArea
            cols={60}
            rows={3}
            className="font-mono !text-[12px]"
            id="what_actually"
          />
        </li>
        <li className="p-[5px_0]">
          <label htmlFor="feeling" className="block font-bold">
            This is how I feel about it in 140 characters or less
          </label>
          <Input id="feeling" maxLength={140} />
        </li>
        <li className="p-[5px_0]">
          <Submit value="Send!" />
        </li>
      </ul>
    </Form>
  );
}
