declare module "react-reveal/Bounce";
declare module "react-reveal/Flip";
declare module "react-reveal/Shake";
declare module "react-reveal/Fade";
declare module "react-reveal/Zoom";
declare module "react-reveal/Slide";
import { Note, Gas, Computer, Construction, Coffee, Mail, CarMarket } from '../common/components/icons';

import type { StaticImageData } from 'next/image';

// export interface dataItem {
//   title: string;
//   text: string;
//   imageUrl: StaticImageData;
//   fillColor1?: string;
//   fillColor2?: string;
// }

// export interface Data {
//   type: 'clock' | 'mail' | 'note' | 'phone';
//   dataItem: dataItem;
// }

export interface  AdvantageItems {
  title: string;
  text: string;
  image: string;
  src?: any;
  type: string;
  colors?:string;
}

export interface Advantage {
  type?: any;
  colors?: string[];
  items: AdvantageItem[];
}

export interface IconListProps {
  advantages: Advantage[];
  onItemClick: (itemData: Advantage) => void;
  selectedData?: Advantage;
  types?: JSX.Element;
  renderTypes?: string[];
}

export interface AdvantagesListProps {
  advantages: Advantage[];
  renderDataItem: (advantage: Advantages) => JSX.Element;
}

export interface AdvantageItemProps {
  advantages: AdvantageItems;
  colors?: string[];
}

export interface ImageProps {
  src: any;
  alt: string;
  isLoading: boolean;
  layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  colors?: string[];
}

export interface ProductTypeProps {
  type: 'despesas' | 'combustivel';
}

export type ProductType = 'despesas' | 'combustivel';

export type ProductTypeColors = {
  [key in ProductType]: string[];
};

export interface IconProps {
  type: 'note' | 'gas' | 'mail' | 'computer' | 'carmarket' | 'construction' | 'coffee' | 'clock' | 'card' | 'phone' | 'clock';
}

export interface Video {
  image?: any;
  title?: string;
  text?: string;
}

export interface Price {
  title: string;
  price: string;
  text: string;
  colors?: string[];
  images: any[];
}

export interface Intro {
  tag?: string;
  label?: string;
  title?: string;
  text?: string;
  showInput?: boolean;
  colors?: string[];
}

export interface FaqItems {
  map(arg0: (item: any, index: any) => JSX.Element): import("react").ReactNode;
  question?: string;
  answer?: string;
}
export interface Faq {
  description?: string;
  style?: string;
  styleMobile?: string;
  colors?: string[];
  items: FaqItems;
}

export interface Carousel {
  type?: string;
  description?: string;
}

export interface WantMoreSuccess {
  images?: any[];
  title?: string;
  text?: string;
  label?: string;
  textLabel?: string;
  colors?: string[];
}

export interface Product {
  type?: any;
  intro?: Intro[];
  advantages?: Advantage[];
  price?: Price[];
  faq?: Faq[];
  Easy: Easy[];
  carouselTitle?: string;
  carouselItems?: Carousel[];
  video?: Video;
  success?: WantMoreSuccess[];
}

export interface Easy {
  title?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  textButton?: string;
}

