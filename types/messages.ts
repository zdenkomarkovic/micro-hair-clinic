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
    subtitle2: string;
    list1: string[];
    list2: string[];
  };
  datatreatments: {
    title: string;
    cta: string;
    tretmans: {
      title: string;
      slug: string;
      img: string;
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
  artist: {
    title: string;
    text: string;
    award1: string;
    award2: string;
    award3: string;
    text2: string;
  };
  tretmanFlow: {
    title: string;
    description: string;
    text: {
      bold: string;
      normal: string;
    }[];
  };

  