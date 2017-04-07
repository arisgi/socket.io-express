import React from 'react';

class App extends React.Component {
  componentWillMount() {
    if (this.props.user.status === 'away') {
      this.props.router.replace('/');
    }
  }

  render() {
    return (
      <div>
        hoge
      </div>
    );
  }
}

export default App;
