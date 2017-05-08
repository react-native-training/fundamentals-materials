import React from 'react';

import {
  ScrollView,
  Text,
} from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';

class ConditionalRenderExample extends React.Component {
  static navigationOptions = {
    title: 'Conditional Render Example',
  }

  state = {
    isLoaded: false,
    isLoading: false,
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  load = () => {
    this.setState({
      isLoading: true,
    });
    this.timeout = setTimeout(() => {
      this.setState({
        isLoading: false,
        isLoaded: true,
      });
    }, 3000);
  }

  render() {
    const data = true;
    if (!data) {
      return <Text>No data..</Text>;
    }

    const { isLoading, isLoaded } = this.state;
    return (
      <ScrollView>
        <ComponentDivider>
          <Text style={{ textAlign: 'center' }}>Hello from ConditionalRenderExample</Text>
          {
            !isLoading && !isLoaded && <Text onPress={this.load}>Load</Text>
          }
          {
            isLoading && <Text>Loading...</Text>
          }
          {
            isLoaded && <Text>Here is the loaded data!</Text>
          }
        </ComponentDivider>
      </ScrollView>
    );
  }
}

export default ConditionalRenderExample;
