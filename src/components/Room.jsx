import React from 'react';
import Message from './Message';
import RoomForm from './RoomForm';

class Room extends React.Component {
  componentWillMount() {
    if (this.props.user.status === 'away') {
      this.props.router.replace('/');
    }
  }

  render() {
    return (
      <div>
        <ul id="messages">
          {this.props.messages.list && this.props.messages.list.map(message =>
            <Message message={message} />,
          )}
        </ul>
        <RoomForm onSubmit={this.props.handleSubmit} />
      </div>
    );
  }
}

export default Room;
