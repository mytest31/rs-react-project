import { Component } from 'react';

interface ComponentProps {
  children: React.JSX.Element[] | React.JSX.Element;
}

interface ComponentState {
  error: null | Error;
}

const classList: { [key: string]: string } = {
  message: 'message',
};

export default class CustomErrorBoundary extends Component<ComponentProps, ComponentState> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className={classList.message}>
          Sorry, an error has occurred. A fallback UI has been displayed.
        </div>
      );
    }
    return this.props.children;
  }
}
