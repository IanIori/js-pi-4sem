import {Input} from "@nextui-org/react";

export default function InputI() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input 
      isRequired
      type="" 
      label="" />
      <Input type="" label="" placeholder="" />
    </div>
  );
}
