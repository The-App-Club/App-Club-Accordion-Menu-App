import {css, cx} from '@emotion/css';
import {Spacer} from '../../components/Spacer';
import {default as Layout} from '../../layouts/default';
import {useNavigate} from 'react-router-dom';
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

const ProductsPage = ({pageName, notifier}) => {
  const navigate = useNavigate();
  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={css`
          margin: 0 auto;
          max-width: 40rem;
          width: 100%;
          min-height: 100vh;
          position: relative;
          padding-bottom: 10rem;
        `}
      >
        <div
          className={css`
            width: 100%;
            padding-top: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <h2>ProductsPage</h2>
          <Spacer height={`3rem`} />
          <div
            className={css`
              width: 100%;
              display: grid;
              grid-template-columns: repeat(6, 1fr);
              grid-template-rows: repeat(4, 1fr);
              gap: 1rem;

              > div {
                /* border: 1px solid; */
                width: 100%;
                min-height: 8rem;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                :hover {
                  cursor: pointer;
                }
              }

              .div1 {
                grid-area: 1 / 1 / 3 / 4;
              }
              .div2 {
                grid-area: 2 / 4 / 4 / 6;
              }
              .div3 {
                grid-area: 1 / 4 / 2 / 7;
              }
              .div4 {
                grid-area: 2 / 6 / 5 / 7;
              }
              .div5 {
                grid-area: 3 / 1 / 5 / 2;
              }
              .div6 {
                grid-area: 3 / 2 / 5 / 4;
              }
              .div7 {
                grid-area: 4 / 4 / 5 / 6;
              }
            `}
          >
            <div
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
              className={cx(
                css`
                  background-image: url(https://picsum.photos/seed/${123}/1200/800);
                `,
                'div1'
              )}
            ></div>
            <div
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
              className={cx(
                css`
                  background-image: url(https://picsum.photos/seed/${223}/1200/800);
                `,
                'div2'
              )}
            ></div>
            <div
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
              className={cx(
                css`
                  background-image: url(https://picsum.photos/seed/${323}/1200/800);
                `,
                'div3'
              )}
            ></div>
            <div
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
              className={cx(
                css`
                  background-image: url(https://picsum.photos/seed/${423}/1200/800);
                `,
                'div4'
              )}
            ></div>
            <div
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
              className={cx(
                css`
                  background-image: url(https://picsum.photos/seed/${523}/1200/800);
                `,
                'div5'
              )}
            ></div>
            <div
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
              className={cx(
                css`
                  background-image: url(https://picsum.photos/seed/${623}/1200/800);
                `,
                'div6'
              )}
            ></div>
            <div
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
              className={cx(
                css`
                  background-image: url(https://picsum.photos/seed/${723}/1200/800);
                `,
                'div7'
              )}
            ></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export {ProductsPage};
