import {Spacer} from '../../components/Spacer';
import {css} from '@emotion/css';
import {default as Layout} from '../../layouts/default';

const AboutPage = ({pageName, notifier}) => {
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
          <h2>AboutPage</h2>
          <p>something...</p>
          <p>something...</p>
          <p>something...</p>
          {[...Array(100).keys()].map((n) => {
            return <Spacer key={n} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export {AboutPage};
