import React from 'react';

const ConfigContext = React.createContext({});

const WithConfig = Component => function WrappedComponent(props) {
  return (
    <ConfigContext.Consumer>
      {config => (
        <Component {...props} config={config} />
      )}
    </ConfigContext.Consumer>
  );
};

export {
  ConfigContext,
  WithConfig,
};
