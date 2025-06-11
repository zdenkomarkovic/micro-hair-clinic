export type Messages = {
  "page.home.head.title": string;
  "page.home.head.meta.description": string;
  "hero.title": string;
  "hero.subtitle": string;
  "hero.text": string;
  "hero.button": string;
  cardwithimage: {
    title: string;
    text: string[];
  };
  cards2: {
    title: string;
    text: string;
    link: string;
  }[];
  cards2text: {
    title: string;
    text: string;
    span: string;
    text2: string;
    subtitle: string;
    list1: string[];
    list2: string[];
  };
  datatreatments: {
    title: string;
    cta: string;
    tretmans: {
      title: string;
      slug: string;
    }[];
  };
  questions: {
    title: string;
    categories: {
      title: string;
      cta: string;
      link: string;
      answers: {
        question: string;
        text: string;
        list: string[];
        text2: string;
      }[];
    }[];
  };
  section: {
    title: string;
    span: string;
    title2: string;
    title3: string;
    span2: string;
    subtitle: string;
    span3: string;
    subtitle2: string;
    span4: string;
    subtitle3: string;
    span5: string;
  };
  cards: {
    title: string;
    mim: string;
    img: string;
  }[];

  usluge: {
    img: string;
    title: string;
    text: string;
    span: string;
  }[];
};
