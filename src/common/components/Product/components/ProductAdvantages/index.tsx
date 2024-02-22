import React, { useState, useEffect } from 'react';
import { AdvantageItems } from '../../../../../types';
import DataItem from './components/Item';
import IconList from './components/IconList';
import ItemList from './components/ItemList';
import ImageItem from './components/Image';
import { Advantage } from '../../../../../types';
import { Phone, Note, Clock, Mail, Gas } from '../../../icons';

interface AdvantageProps {
  advantages: Advantage[];
}

const typeIcons = {
  phone: <Phone />,
  note: <Note />,
  clock: <Clock />,
  mail: <Mail />,
  gas: <Gas />
};

const AdvantagesSection: React.FC<AdvantageProps> = ({ advantages }) => {
  const [selectedData, setSelectedData] = useState<Advantage | undefined>(advantages.length > 0 ? advantages[0].items[0] : undefined);
  const [disableAutoChange, setDisableAutoChange] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!disableAutoChange) {
        const currentIconIndex = advantages[0].items.indexOf(selectedData);
        const nextIndex = (currentIconIndex + 1) % advantages[0].items.length;
        setSelectedData(advantages[0].items[nextIndex]);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [advantages, selectedData, disableAutoChange]);

  const handleItemClick = (itemData: Advantage) => {
    setSelectedData(itemData);
    setDisableAutoChange(true);

    // Permitir a mudança automática após 15 segundos
    setTimeout(() => {
      setDisableAutoChange(false);
    }, 15000);
  };

  const color = advantages[0].colors.map((color) => { return color });

  const renderImage = ({ image, title, src, colors }: AdvantageItems) => {
    return <ImageItem src={image} alt={title} isLoading={false} layout={'fixed'} colors={color} />;
  };

  return (
    <div className='relative flex flex-col md:flex-row md:pt-10 2xl:pt-32'>
      <IconList advantages={advantages} onItemClick={handleItemClick} selectedData={selectedData} />
      {selectedData && (
        <ItemList
          advantages={[selectedData]}
          renderDataItem={(advantage) => <DataItem advantages={advantage} renderImage={renderImage} isLoading={false} />}
        />
      )}
    </div>
  );
};

export default AdvantagesSection;
