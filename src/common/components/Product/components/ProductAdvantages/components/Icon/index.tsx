import React from 'react';
import IconClock from '../../../../../icons/Clock';
import IconMail from '../../../../../icons/Mail';
import IconNote from '../../../../../icons/Note';
import IconPhone from '../../../../../icons/Phone';
import { IconProps } from '../../../../../../../types';

const typeIcons = {
  clock: <IconClock />,
  mail: <IconMail />,
  note: <IconNote />,
  phone: <IconPhone />,
};

const Icon: React.FC<IconProps> = ({ type } ) => {
  const icon = typeIcons[type];

  return <>{icon}</>;
};

export default Icon;
