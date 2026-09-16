export interface ISliderItem extends ISlide {
  itemClassName?: string;
}

export interface ISlide {
  id: number;
  text: string;
  image: string;
  title: string;
  isRightPlaced?: boolean;
}
