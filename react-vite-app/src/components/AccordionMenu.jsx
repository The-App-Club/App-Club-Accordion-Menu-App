import {css, cx} from '@emotion/css';
import {useMemo, useState} from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {Link, useNavigate} from 'react-router-dom';
import {default as chance} from 'chance';

const AccordionMenu = () => {
  const navigate = useNavigate();
  const items = useMemo(() => {
    return [
      {
        mainMenutext: `Home`,
        route: `/`,
        subMemuList: [],
      },
      {
        mainMenutext: `About`,
        route: `/about`,
        subMemuList: [],
      },
      {
        mainMenutext: `Contact`,
        route: `/contact`,
        subMemuList: [],
      },
      {
        mainMenutext: `Work`,
        route: `/work`,
        subMemuList: [],
      },
      {
        mainMenutext: `Products`,
        route: `/products`,
        subMemuList: [
          {
            subMenutext: `Item 1`,
            route: `/products/item1`,
            state: {
              name: `item1`,
              imageURL: `https://picsum.photos/seed/${123}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          },
          {
            subMenutext: `Item 2`,
            route: `/products/item2`,
            state: {
              name: `item2`,
              imageURL: `https://picsum.photos/seed/${223}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          },
          {
            subMenutext: `Item 3`,
            route: `/products/item3`,
            state: {
              name: `item3`,
              imageURL: `https://picsum.photos/seed/${323}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          },
          {
            subMenutext: `Item 4`,
            route: `/products/item4`,
            state: {
              name: `item4`,
              imageURL: `https://picsum.photos/seed/${423}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          },
          {
            subMenutext: `Item 5`,
            route: `/products/item5`,
            state: {
              name: `item5`,
              imageURL: `https://picsum.photos/seed/${523}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          },
          {
            subMenutext: `Item 6`,
            route: `/products/item6`,
            state: {
              name: `item6`,
              imageURL: `https://picsum.photos/seed/${623}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          },
          {
            subMenutext: `Item 7`,
            route: `/products/item7`,
            state: {
              name: `item7`,
              imageURL: `https://picsum.photos/seed/${723}/1200/800`,
              // description: lorem.generateSentences(2),
              description: `Proident reprehenderit adipisicing irure aute eu laboris consequat aute adipisicing do culpa fugiat mollit. Esse deserunt excepteur laboris dolor nulla ea cillum nisi consectetur nisi pariatur.`,
              price: chance().integer({min: 200, max: 2000}),
            },
          },
        ],
      },
      {
        mainMenutext: `Access`,
        route: `/access`,
        subMemuList: [
          {
            subMenutext: `Access by train`,
            route: `/access/train`,
            state: {
              name: `train`,
            },
          },
          {
            subMenutext: `Access by foot`,
            route: `/access/foot`,
            state: {
              name: `foot`,
            },
          },
          {
            subMenutext: `Access by car`,
            route: `/access/car`,
            state: {
              name: `car`,
            },
          },
          {
            subMenutext: `Access by bus`,
            route: `/access/bus`,
            state: {
              name: `bus`,
            },
          },
        ],
      },
      {
        mainMenutext: `Characters`,
        route: `/characters`,
        subMemuList: [
          {
            subMenutext: `Spike`,
            route: `/characters/spike`,
          },
          {
            subMenutext: `Jet`,
            route: `/characters/jet`,
          },
          {
            subMenutext: `Faye`,
            route: `/characters/faye`,
          },
          {
            subMenutext: `Edward`,
            route: `/characters/edward`,
          },
        ],
      },
    ];
  }, []);

  return (
    <Accordion
      allowZeroExpanded
      className={cx(
        `accordion`,
        css`
          color: #000 !important;
        `
      )}
    >
      {items.map((item, i) => {
        return (
          <AccordionItem key={i}>
            <AccordionItemHeading
              onClick={
                item.subMemuList.length === 0
                  ? (e) => {
                      navigate(`${item.route}`, {
                        state: item.state,
                      });
                    }
                  : (e) => {}
              }
            >
              <AccordionItemButton
                className={cx(
                  `accordion__button`,
                  css`
                    background-color: transparent;
                    &:hover {
                      background: rgba(227, 227, 227, 0.5);
                      cursor: pointer;
                    }
                    &::before {
                      opacity: ${item.subMemuList.length === 0 ? 0 : 1};
                      /* display: none; */
                      visibility: ${item.subMemuList.length === 0
                        ? `hidden`
                        : `visble`};
                      display: inline-block;
                      content: '';
                      height: 10px;
                      width: 10px px;
                      margin-right: 12px;
                      border-bottom: 2px solid currentColor;
                      border-right: 2px solid currentColor;
                      transform: rotate(-45deg);
                    }
                  `
                )}
              >
                <Link
                  to={`${item.route}`}
                  className={css`
                    padding: 0.8rem;
                    text-decoration: none;
                    &:hover,
                    &:focus {
                      color: #c94e50;
                    }
                  `}
                >
                  {item.mainMenutext}
                </Link>
              </AccordionItemButton>
            </AccordionItemHeading>
            {item.subMemuList.map((subItem, j) => {
              return (
                <AccordionItemPanel
                  key={j}
                  className={cx(
                    css`
                      /* background: #ccc; */
                      padding: 20px;
                      animation: fadein 0.35s ease-in;
                      &:hover {
                        background: rgba(227, 227, 227, 0.5);
                        cursor: pointer;
                      }
                    `,
                    `accordion__panel`
                  )}
                  onClick={(e) => {
                    navigate(`${subItem.route}`, {
                      state: subItem.state,
                    });
                  }}
                >
                  <Link
                    to={`${subItem.route}`}
                    state={subItem.state}
                    className={css`
                      padding: 0.8rem;
                      text-decoration: none;
                      &:hover,
                      &:focus {
                        color: #c94e50;
                      }
                    `}
                  >
                    {subItem.subMenutext}
                  </Link>
                </AccordionItemPanel>
              );
            })}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export {AccordionMenu};
