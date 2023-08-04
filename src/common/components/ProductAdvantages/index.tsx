import React, { useState } from 'react';
import { Data, dataItem } from '../../../types';
import DataItem from './components/Item';
import IconList from './components/IconList';
import ItemList from './components/ItemList';
import Img1 from './components/images/despesas1.jpg'
import ImageItem from './components/Image';

const ProductAdvantages: React.FC = () => {
    const data: Data[] = [
        {
            type: 'clock',
            dataItem: {
                title: 'Administre despesas fixas e variáveis em tempo real',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia eros. Duis cursus, nisi a pellentesque finibus.',
                imageUrl: Img1,
            },
        },
        {
            type: 'mail',
            dataItem: {
                title: 'Fuel',
                text: 'This is a fuel item',
                imageUrl: Img1,
            },
        },
        {
            type: 'note',
            dataItem: {
                title: 'Shopping',
                text: 'This is a shopping item',
                imageUrl: Img1,
            },
        },
        {
            type: 'phone',
            dataItem: {
                title: 'Food',
                text: 'This is a food item',
                imageUrl: Img1,
            },
        },
    ];

    const [selectedData, setSelectedData] = useState<Data | undefined>(data.length > 0 ? data[0] : undefined);

    const handleItemClick = (itemData: Data) => {
        setSelectedData(itemData);
    };

    const renderImage = ({ imageUrl, title }: dataItem) => {
        return <ImageItem src={imageUrl} alt={title} />;
    };

    return (
        <div className='relative flex pt-32'>
            <IconList data={data} onItemClick={handleItemClick} selectedData={selectedData} />
            {selectedData && (
                <ItemList
                    data={[selectedData]}
                    renderDataItem={(data) => <DataItem key={data.dataItem.title} data={data} renderImage={renderImage} />}
                />
            )}
        </div>
    );

};

export default ProductAdvantages;
