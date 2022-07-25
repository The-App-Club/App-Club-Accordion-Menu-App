import {css} from '@emotion/css';
import {default as Layout} from '../../layouts/default';

const WorkPage = ({pageName, notifier}) => {
  return (
    <Layout pageName={pageName} notifier={notifier}>
      <section
        className={css`
          margin: 0 auto;
          max-width: 40rem;
          width: 100%;
          min-height: 100vh;
          position: relative;
        `}
      >
        <div
          className={css`
            padding-top: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <h2>WorkPage</h2>
          <p>something...</p>
          <p>something...</p>
          <p>something...</p>
        </div>
      </section>
    </Layout>
  );
};

export {WorkPage};
