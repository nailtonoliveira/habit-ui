import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import UnsignedLayout from '../layouts/Unsigned';
import SignedLayout from '../layouts/Signed';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (isPrivate && !signed) return <Redirect to="/sign-in" />;

  if (!isPrivate && signed) return <Redirect to="/home" />;

  const Layout = signed ? SignedLayout : UnsignedLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
}

RouteWrapper.defaultProps = {
  isPrivate: false,
};

RouteWrapper.propTypes = {
  component: PropTypes.node.isRequired,
  isPrivate: PropTypes.bool,
};
