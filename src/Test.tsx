import React from 'react';
import {Text} from 'react-native';

class Test extends React.Component<{isSuccess: boolean}, {count: number}> {
  constructor(props: {isSuccess: boolean}) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  rennder() {
    return (
      <Text
        onPress={() => {
          this.setState({count: this.state.count + 1});
        }}>
        Test
      </Text>
    );
  }
}

export default Test;
