export type CardState = {
  cards: Card[] | null;
};

type Card = {
  confings: {
    cardStyle: {
      color: string;
      type: string;
    };
    titleStyle: {
      color: string;
    };
    coverImage: string;
  };
  title: {
    en: string;
    ru: string;
  };
  words: Word[];
};

type Word = {
  learnWord: string;
  translate: {
    en: string;
    ru: string;
  };
};
