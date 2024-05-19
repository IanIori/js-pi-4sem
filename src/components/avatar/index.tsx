import {Avatar} from "@nextui-org/react";

export default function AvatarA() {
  return (
    <div className="flex gap-3 items-center">
      <Avatar isBordered color="success"
      src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
      size="lg" />
      <Avatar name="João da Silva" />
    </div>
  );
}
