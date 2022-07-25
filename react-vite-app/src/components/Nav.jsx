import {Link} from 'react-router-dom';
import {css} from '@emotion/css';
import {
  slide,
  bubble,
  elastic,
  reveal,
  scaleRotate,
  stack,
  fallDown,
  push,
  pushRotate,
  scaleDown as Menu,
} from 'react-burger-menu';
import {useEffect, useState} from 'react';
import {AccordionMenu} from './AccordionMenu';

const Nav = ({tik, isRight = false, outerContainerDomRef}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // console.log(`tik`, open);
    setOpen((open) => {
      if (open) {
        return false;
      }
      return open;
    });
  }, [tik]);

  return (
    <div
      className={css`
        //
        // Burger menu custom styles
        //
        .bm-burger-button {
          position: fixed;
          width: 36px;
          height: 30px;
          top: 36px;
          right: 36px;
          left: ${isRight ? 'initial' : '36px'};
          right: ${isRight ? '36px' : 'initial'};
        }

        // Outline for burger button focus state
        .bm-burger-button button:focus {
          outline: 2px solid #c94e50;
          outline-offset: 8px;
        }

        // Background color for burger bars focus state
        .bm-burger-button {
          button:focus + span {
            span.bm-burger-bars {
              background-color: #c94e50;
            }
          }
        }

        .right .bm-burger-button {
          left: initial;
          right: 36px;
        }

        .bm-burger-bars {
          background: #373a47;
        }

        .bm-morph-shape {
          fill: #f4f4f4;
        }

        .bm-menu {
          background: #f4f4f4;
        }
        .bm-item:focus {
          outline: none;
        }
      `}
    >
      <Menu
        isOpen={open}
        onStateChange={(e) => {
          const outerContainerDom = outerContainerDomRef.current;
          if (e.isOpen) {
            outerContainerDom.classList.add('nav-active');
          } else {
            outerContainerDom.classList.remove('nav-active');
          }
          setOpen(e.isOpen);
        }}
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        right={isRight}
      >
        <AccordionMenu />
      </Menu>
    </div>
  );
};

export {Nav};
