import {Spacer} from '../../components/Spacer';
import {css} from '@emotion/css';
import {default as Layout} from '../../layouts/default';
import {Navigate, useLocation} from 'react-router-dom';
import {useMemo} from 'react';

const TransportationPage = ({pageName, notifier}) => {
  const location = useLocation();
  const itemInfo = useMemo(() => {
    const {state} = location;
    return state;
  }, [location]);
  if (!itemInfo) {
    return <Navigate to="/access" />;
  }
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
          <h2>TransportationPage</h2>
          <h3>{itemInfo.name}</h3>
          <p>something...</p>
          <p>something...</p>
          <p>something...</p>
        </div>
      </section>
    </Layout>
  );
};

export {TransportationPage};
