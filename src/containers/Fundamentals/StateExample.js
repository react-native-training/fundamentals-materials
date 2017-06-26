import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

import ComponentDivider from '../../components/ComponentDivider';
import ExampleTitle from '../../components/ExampleTitle';

class Example1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Nader',
      age: 24,
    };
  }

  render() {
    return (
      <View>
        <ComponentDivider>
          <ExampleTitle title="Constructor state example" />
          <Text>{this.state.name}</Text>
          <Text>{this.state.age}</Text>
        </ComponentDivider>
      </View>
    );
  }
}

class Example2 extends React.Component {
  state = {
    name: 'Nader',
  }

  updateName = () => {
    const name = this.state.name === 'Nader' ? 'Amanda' : 'Nader';
    this.setState({
      name,
    });
  }

  render() {
    return (
      <View>
        <ComponentDivider>
          <ExampleTitle title="Basic set state example" />
          <Text>{this.state.name}</Text>
          <Button
            title="Update Name"
            onPress={this.updateName}
          />
        </ComponentDivider>
      </View>
    );
  }
}

const names = [
  'Randy', 'Melissa', 'Charles', 'Mandy', 'Jason', 'Joe', 'Linda',
];

class Example3 extends React.Component {
  state = {
    people: ['Nader', 'Amanda'],
  }

  addName = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    this.state.people.push(name);
    this.setState({
      people: this.state.people,
    });
  }

  render() {
    return (
      <View>
        <ComponentDivider>
          <ExampleTitle title="Array state example" />
          {
            this.state.people.map((person, index) => {
              return (
                <Text key={index}>{person}</Text>
              );
            })
          }
          <Button
            title="Add Name"
            onPress={this.addName}
          />
        </ComponentDivider>
      </View>
    );
  }
}

class Example4 extends React.Component {
  state = {
    info: {
      title: 'React Fundamentals',
      date: 'January 13 2018',
    },
  }

  updateInfo = () => {
    this.setState({
      info: {
        title: 'React Native Fundamentals',
        date: new Date().toString(),
      },
    });
  }

  render() {
    return (
      <View>
        <ComponentDivider>
          <ExampleTitle title="Object state example" />
          <Button
            title="Update Info"
            onPress={this.updateInfo}
          />
          <Text>{this.state.info.title}</Text>
          <Text>{this.state.info.date}</Text>
        </ComponentDivider>
      </View>
    );
  }
}


// Example of props being updated as parent state is updated

const NameShower = ({ name }) => <Text>{name}</Text>;

class Example5 extends React.Component {
  state = {
    name: 'Nader',
  }

  updateName = () => {
    this.setState({ name: 'Amanda' });
  }

  render() {
    return (
      <View>
        <ComponentDivider>
          <ExampleTitle title="Child props + state example" />
          <Button
            title="Update Info"
            onPress={this.updateName}
          />
          <NameShower name={this.state.name} />
        </ComponentDivider>
      </View>
    );
  }
}

// Example of state callback

class Example6 extends React.Component {
  state = {
    name: 'Nader',
  }

  updateName = () => {
    this.setState({ name: 'Amanda' });
    // This name gets logged out as the old name
    // setState is an asynchronous function
    console.log('name:', this.state.name);
  }

  render() {
    return (
      <View>
        <ComponentDivider>
          <ExampleTitle title="setState callback example" />
          <Button
            title="Update Name"
            onPress={this.updateName}
          />
          <NameShower name={this.state.name} />
        </ComponentDivider>
      </View>
    );
  }
}


class Fundamentals extends React.Component {
  static navigationOptions = {
    title: 'State',
  }
  render() {
    return (
      <ScrollView>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <Example5 />
        <Example6 />
      </ScrollView>
    );
  }
}



// Exercise: In Example5, Update the text size of NameShower component when the button is pressed

// Solution👇
/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*/
// Solution

const NameShower2 = ({ name, fontSizeUpdated }) => (
  <Text style={{ fontSize: fontSizeUpdated ? 22 : null }}>{name}</Text>
);

class Example7 extends React.Component {
  state = {
    name: 'Nader',
    fontSizeUpdated: false,
  }

  updateName = () => {
    this.setState({
      name: 'Amanda',
      fontSizeUpdated: true,
    });
  }

  render() {
    return (
      <View>
        <ComponentDivider>
          <ExampleTitle title="Child props + state example" />
          <Button
            title="Update Info"
            onPress={this.updateName}
          />
          <NameShower2 fontSizeUpdated={this.state.fontSizeUpdated} name={this.state.name} />
        </ComponentDivider>
      </View>
    );
  }
}

export default Fundamentals;
