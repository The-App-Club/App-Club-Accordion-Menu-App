import {css, cx} from '@emotion/css';
import {default as Layout} from '../../layouts/default';
import {default as LayoutItem} from '../../layouts/item';
import {Link, useLocation, Navigate} from 'react-router-dom';
import {useMemo} from 'react';
import {Spacer} from '../../components/Spacer';
import {Button} from '@mui/material';
import {Slider} from '../../components/Slider';
import '@fontsource/kaushan-script';
import {useEffect} from 'react';

const ProductPage = ({pageName, notifier}) => {
  const location = useLocation();
  const itemInfo = useMemo(() => {
    const {state} = location;
    return state;
  }, [location]);
  if (!itemInfo) {
    return <Navigate to="/products" />;
  }

  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={css`
          margin: 0 auto;
          max-width: 60rem;
          width: 100%;
          min-height: 100vh;
          position: relative;
          background: white;
          padding: 0rem 1rem;
        `}
      >
        <div
          className={css`
            position: relative;
            padding-top: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <div
            className={css`
              position: relative;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <div
              className={css`
                position: absolute;
                left: 0;
              `}
            >
              <Link to={`/products`}>Back</Link>
            </div>
            <h2
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
              `}
            >
              ProductPage
            </h2>
          </div>
          <Spacer
            height={`3rem`}
            className={css`
              @media (max-width: 1400px) {
                height: 1.5rem;
              }
              @media (max-width: 768px) {
                height: 2rem;
              }
            `}
          />
          <div
            className={css`
              width: 100%;
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: repeat(4, 1fr);
              gap: 1rem;
              > div {
                /* border: 1px solid; */
                width: 100%;
                min-height: 8rem;
              }

              .div1 {
                grid-area: 1 / 1 / 3 / 3;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;
                :hover {
                  cursor: pointer;
                }
              }
              .div2 {
                grid-area: 3 / 1 / 4 / 3;
              }
              .div3 {
                grid-area: 4 / 1 / 5 / 3;
              }
              .div4 {
                grid-area: 1 / 3 / 5 / 4;
              }

              @media (max-width: 768px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(3, 1fr);
                .div1 {
                  grid-area: 1 / 1 / 2 / 3 !important;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-position: center center;
                  :hover {
                    cursor: pointer;
                  }
                  max-height: 22rem;
                  height: 100%;
                  overflow: hidden;
                }
                .div2 {
                  grid-area: 2 / 1 / 3 / 2 !important;
                }
                .div3 {
                  grid-area: 3 / 1 / 4 / 3 !important;
                }
                .div4 {
                  grid-area: 2 / 2 / 3 / 3 !important;
                }
              }
            `}
          >
            <LayoutItem
              className={cx(
                css`
                  background-image: url(${itemInfo.imageURL});
                `,
                'div1'
              )}
            ></LayoutItem>
            <div className="div2">
              <p
                className={css`
                  margin: 0;
                  padding: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 100%;
                  font-size: 1.2rem;
                `}
              >
                {itemInfo.description}
              </p>
            </div>
            <div className="div3">
              <Slider />
            </div>
            <div
              className={cx(
                css`
                  position: relative;
                `,
                'div4'
              )}
            >
              <div
                className={css`
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 3rem;
                  font-family: 'Kaushan Script';
                `}
              >{`$ ${itemInfo.price}`}</div>
              <div
                className={css`
                  position: absolute;
                  bottom: 1rem;
                  right: 1rem;
                `}
              >
                <Button variant={'outlined'}>Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export {ProductPage};
