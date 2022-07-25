import {css, cx} from '@emotion/css';

const Spacer = ({height = `1rem`, className = css``}) => {
  return (
    <div
      className={cx(
        css`
          width: 100%;
          height: ${height};
        `,
        className
      )}
    />
  );
};

export {Spacer};
