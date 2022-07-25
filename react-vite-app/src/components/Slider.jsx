import {css, cx} from '@emotion/css';
import {useNavigate} from 'react-router-dom';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {LoremIpsum} from 'lorem-ipsum';
import {default as chance} from 'chance';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const Slider = () => {
  const navigate = useNavigate();
  return (
    <Splide
      aria-label="relative item list"
      className={css`
        height: 100%;
        div {
          position: absolute;
          width: 100%;
          min-height: 8rem;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
          :hover {
            cursor: pointer;
          }
        }
      `}
    >
      <SplideSlide
        onClick={(e) => {
          navigate(`/products/item1`, {
            state: {
              name: `item1`,
              imageURL: `https://picsum.photos/seed/${123}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          });
        }}
      >
        <div
          className={css`
            background-image: url(https://picsum.photos/seed/${123}/1200/800);
          `}
        />
      </SplideSlide>
      <SplideSlide
        onClick={(e) => {
          navigate(`/products/item2`, {
            state: {
              name: `item2`,
              imageURL: `https://picsum.photos/seed/${223}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          });
        }}
      >
        <div
          className={css`
            background-image: url(https://picsum.photos/seed/${223}/1200/800);
          `}
        />
      </SplideSlide>
      <SplideSlide
        onClick={(e) => {
          navigate(`/products/item3`, {
            state: {
              name: `item3`,
              imageURL: `https://picsum.photos/seed/${323}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          });
        }}
      >
        <div
          className={css`
            background-image: url(https://picsum.photos/seed/${323}/1200/800);
          `}
        />
      </SplideSlide>
      <SplideSlide
        onClick={(e) => {
          navigate(`/products/item4`, {
            state: {
              name: `item4`,
              imageURL: `https://picsum.photos/seed/${423}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          });
        }}
      >
        <div
          className={css`
            background-image: url(https://picsum.photos/seed/${423}/1200/800);
          `}
        />
      </SplideSlide>
      <SplideSlide
        onClick={(e) => {
          navigate(`/products/item5`, {
            state: {
              name: `item5`,
              imageURL: `https://picsum.photos/seed/${523}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          });
        }}
      >
        <div
          className={css`
            background-image: url(https://picsum.photos/seed/${523}/1200/800);
          `}
        />
      </SplideSlide>
      <SplideSlide
        onClick={(e) => {
          navigate(`/products/item6`, {
            state: {
              name: `item6`,
              imageURL: `https://picsum.photos/seed/${623}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          });
        }}
      >
        <div
          className={css`
            background-image: url(https://picsum.photos/seed/${623}/1200/800);
          `}
        />
      </SplideSlide>
      <SplideSlide
        onClick={(e) => {
          navigate(`/products/item7`, {
            state: {
              name: `item7`,
              imageURL: `https://picsum.photos/seed/${723}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          });
        }}
      >
        <div
          className={css`
            background-image: url(https://picsum.photos/seed/${723}/1200/800);
          `}
        />
      </SplideSlide>
    </Splide>
  );
};

export {Slider};
