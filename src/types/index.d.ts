declare module "react-reveal/Bounce";
declare module "react-reveal/Flip";
declare module "react-reveal/Shake";
declare module "react-reveal/Fade";
declare module "react-reveal/Zoom";
declare module "react-reveal/Slide";

import type { StaticImageData } from 'next/image';

export interface dataItem {
  title: string;
  text: string;
  imageUrl: StaticImageData;
}

export interface Data {
  type: 'clock' | 'mail' | 'note' | 'phone';
  dataItem: dataItem;
}

export interface Product {
  type: 'despesa' | 'combustivel';
}

export interface IconListProps {
  data: Data[];
  onItemClick: (itemData: Data) => void;
  selectedData?: Data;
}

export interface DataItemProps {
  data: Data[];
  renderDataItem: (data: Data) => JSX.Element;
}

export interface ImageProps {
  src: StaticImageData;
  alt: string;
  isLoading: boolean;
  layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
}

export interface IconProps {
  type: 'clock' | 'mail' | 'note' | 'phone';
}

export interface ProductDataPrice {
  image: StaticImageData;
  price: string;
  title: string;
  description: string;
}

