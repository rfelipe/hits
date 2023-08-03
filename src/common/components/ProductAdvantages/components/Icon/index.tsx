import React from 'react';
import { IconProps } from '../../../../../types';
import IconClock from '../../../icons/Clock';
import IconMail from '../../../icons/Mail';
import IconNote from '../../../icons/Note';
import IconPhone from '../../../icons/Phone';

const typeIcons = {
  clock: <IconClock />,
  card: <IconMail />,
  note: <IconNote />,
  phone: <IconPhone />,
};

const Icon: React.FC<IconProps> = ({ type }) => {
  const icon = typeIcons[type];

  return <>{icon}</>;
};

export default Icon;
