import {css} from '@emotion/css';
import {motion} from 'framer-motion';
import {memo, useEffect, useMemo, useRef} from 'react';
import {usePrevious} from '../hooks/usePrevious';
import gsap from 'gsap';

const motionConfig = {
  initial: {
    x: 0,
    y: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  hide: {
    x: 0,
    y: 60,
    opacity: 0,
  },
};

const Layout = ({children, pageName, notifier}) => {
  const motionDomRef = useRef(null);
  const lastValue = usePrevious(pageName);

  const tl = useMemo(() => {
    return gsap.timeline({
      paused: true,
      onComplete: function (e) {
        // console.log(`done`);
        notifier({message: `done`, pageName});
      },
    });
  }, []);

  useEffect(() => {
    if (!lastValue) return;
    if (lastValue && lastValue !== pageName) {
      const motionDom = motionDomRef.current;
      tl.fromTo(
        motionDom,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        }
      );
      tl.play();
    }
  }, [lastValue, pageName]);

  return (
    <motion.div
      ref={motionDomRef}
      variants={motionConfig}
      initial={'initial'}
      animate={'animate'}
      exit={'hide'}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
      className={css`
        position: relative;
      `}
      onAnimationStart={(e) => {}}
      onAnimationComplete={(e) => {
        // console.log(`done`);
        notifier({message: `done`, pageName});
      }}
    >
      {children}
    </motion.div>
  );
};

export default memo(Layout);
