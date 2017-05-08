import React from 'react';
import { ScrollView } from 'react-native';
import SyntaxHighlighter from '../../components/SyntaxHighlighter';

import ExampleTitle from '../../components/ExampleTitle';

const examples = {};

const getInfoCallback = (cb) => {
  setTimeout(() => {
    cb('Hello World');
  }, 3000);
};

const getInfoPromise = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Hello World');
  }, 3000);
});

class Promises extends React.Component {
  static navigationOptions = () => ({
    title: 'Promises',
  });

  state = {
    message: 'loading',
  }

  componentWillMount() {
    // this.callPromise();
    this.callCallbackFn();
  }

  callPromise = () => {
    getInfoPromise()
      .then((data) => {
        console.log('promise resolved!');
        this.setState({
          message: data,
        });
      });
  }

  callCallbackFn = () => {
    const logInfoCallback = (data) => {
      console.log('callback fired!!!');
      this.setState({
        message: data,
      });
    };
    getInfoCallback(logInfoCallback);
    // getInfoCallback((data) => {
    //   console.log('callback fired');
    //   this.setState({
    //     message: data,
    //   });
    // });
  }

  render() {
    return (
      <ScrollView>
        <ExampleTitle
          title={this.state.message}
        />
        <ExampleTitle
          title='ES5'
        />
        <SyntaxHighlighter>
          {examples.es5}
        </SyntaxHighlighter>

        <ExampleTitle
          title='ES2015'
        />
        <SyntaxHighlighter>
          {examples.es2015}
        </SyntaxHighlighter>
      </ScrollView>
    );
  }
}

examples = {
  es5: `
  
  const getInfoCallback = (cb) => {
    setTimeout(() => {
      cb('Hello World');
    }, 3000);
  };

  const logInfoCallback = (data) => {
    console.log('callback fired');
    this.setState({
      message: data,
    });
  }

  getInfoCallback(logInfoCallback);

  // or

  getInfoCallback((data) => {
    console.log('callback fired');
    this.setState({
      message: data,
    });
  });
  
  `,
  es2015: `
  
  const getInfoPromise = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello World');
    }, 3000);
  });

  getInfoPromise()
    .then((data) => {
      console.log('promise resolved!');
      this.setState({
        message: data,
      });
    });
  
  `,
};

export default Promises;
