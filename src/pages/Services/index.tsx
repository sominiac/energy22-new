import Section from "@components/layout/Section";
import Tabs from "@components/ui/Tabs";
import Text from "@components/ui/Text";

import type { ITab } from "@/interfaces/Tabs/tabs.ts";

import styles from "./styles/services.module.scss";

const TABS_LIST_MOCK: ITab[] = [
  { id: "0", text: "Установка", isActive: true },
  { id: "1", text: "Монтаж", isActive: false },
  { id: "2", text: "Штробление", isActive: false },
  { id: "3", text: "Сверление", isActive: false },
  { id: "4", text: "Неисправности", isActive: false },
  { id: "5", text: "Разное", isActive: false },
];

const SERVICES_LIST_MOCK = {
  INSTALLATION: [
    { id: 0, text: "Люстр" },
    { id: 1, text: "Розеток" },
    { id: 2, text: "Выключателей" },
    { id: 3, text: "Расперед коробок" },
    { id: 4, text: "Распаечных коробок" },
    { id: 5, text: "Установочных коробок" },
    { id: 6, text: "Накладного бокса под электроавтоматы" },
  ],
  MOUNTING: [
    { id: 7, text: "Монтаж и установка кабель канала" },
    { id: 8, text: "Монтаж защитных автоматов с подключением к электросети" },
    { id: 9, text: "Монтаж УЗО и дифференциальных автоматов" },
  ],
  STROBLENIE: [
    { id: 10, text: "Штробление по бетону" },
    { id: 11, text: "Штробление по кирпичу и другим материалам" },
  ],
  DRILLING: [
    { id: 12, text: "Под розетку/выключатель" },
    { id: 13, text: "Под распаечную коробку" },
    { id: 14, text: "Сверление сквозных отверстий в бетоне толщиной 70-80см" },
    { id: 15, text: "Сверление сквозных отверстий в бетоне толщиной 15-20см" },
    {
      id: 16,
      text: "Сверление сквозных отверстий в кирпиче и других материалах толщиной 70-80см",
    },
    {
      id: 17,
      text: "Сверление сквозных отверстий в кирпиче и других материалах толщиной 15-20см",
    },
  ],
  MALFUNCTIONS: [
    { id: 18, text: "Нагрев проводки" },
    { id: 19, text: "Короткое замыкание (нет света)" },
    { id: 20, text: "Перегорела проводка" },
    { id: 21, text: "Скачок тока (выбивает УЗО)" },
    {
      id: 22,
      text: "Перегруз группы розеток",
    },
    {
      id: 23,
      text: "Другое",
    },
  ],
  VARIOUS: [
    { id: 24, text: "Прокладка кабеля" },
    { id: 25, text: "Поиск обрыва электроцепи" },
    {
      id: 26,
      text: "Электрика под ключ в однокомнатной бетонной/монолитной квартире",
    },
    {
      id: 27,
      text: "Электрика под ключ в однокомнатной кирпич/другие квартире",
    },
    {
      id: 28,
      text: "Электрика под ключ в двухкомнатной бетонной/монолитной квартире",
    },
    {
      id: 29,
      text: "Электрика под ключ в двухкомнатной кирпич/другие квартире",
    },
    {
      id: 30,
      text: "Электрика под ключ в трёхкомнатной бетонной/монолитной квартире",
    },
    {
      id: 31,
      text: "Электрика под ключ в трёхкомнатной кирпич/другие квартире",
    },
    {
      id: 32,
      text: "Устранение короткого замыкания",
    },
    {
      id: 33,
      text: "Распайка проводов в распаечных коробках",
    },
  ],
};

const Services = () => {
  return (
    <Section
      classNameSection={styles.services}
      title="Услуги"
      classNameInner={styles.services__inner}
    >
      <header className={styles.services__header}>
        <Tabs tabsList={TABS_LIST_MOCK} />
      </header>
      {/*@TODO: добавить мемоизацию для отрендареных списков*/}
      <ul className={styles.services__list}>
        {SERVICES_LIST_MOCK.INSTALLATION.map(({ id, text }) => (
          <li className={styles.services__listItem} key={id}>
            <Text className={styles.services__itemText} componentType="text2">
              {text}
            </Text>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Services;
