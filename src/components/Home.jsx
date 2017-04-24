import React from 'react';
import HomeForm from './HomeForm';
import style from './Home.css';

class Home extends React.Component {
  componentWillUpdate(nextProps) {
    if (nextProps.user.status === 'attend' && nextProps.user.name) {
      this.props.router.replace('/room');
    }
  }

  render() {
    return (
      <div>
        <HomeForm onSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}

export default Home;
