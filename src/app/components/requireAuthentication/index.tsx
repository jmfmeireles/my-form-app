import React from 'react';

import FormDialog from './FormDialog';

export function requireAuthentication(Component) {
  return class AuthenticatedPage extends React.Component {
    state = {
      isAuthenticated: false,
    };

    render() {
      return (
        <div>
          {this.state.isAuthenticated ? (
            <Component />
          ) : (
            <FormDialog
              isAuthenticated={this.state.isAuthenticated}
              setAuthenticationState={(isAuthenticated: boolean) =>
                this.setState({ isAuthenticated })
              }
            />
          )}
        </div>
      );
    }
  };
}

export default requireAuthentication;
