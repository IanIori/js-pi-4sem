/*import {Avatar} from "@nextui-org/react";

export default function AvatarA() {
  return (
    <div className="flex gap-3 items-center">
      <Avatar isBordered color="success"
      src="https://i.pravatar.cc/150?u=a042581f4e29026024d" 
      size="sm" />
      <Avatar name="João" />
    </div>
  );
}*/

import { Avatar, Wrap, WrapItem } from '@chakra-ui/react';

const user = {
  name: 'João Silva',
  avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
};

function AvatarComponent() {
  return (
    <Wrap>
      <WrapItem>
        <Avatar name={user.name} src={user.avatarUrl} />
      </WrapItem>
    </Wrap>
  );
}

export default  AvatarComponent;

