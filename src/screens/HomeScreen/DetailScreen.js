import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: null,
    };
  }

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item', null);

    this.state = {
      loading: true,
      error: null,
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.concept}>Status:</Text>
        <Text style={styles.description}>{item.state}</Text>
        <Text style={styles.concept}>Issue:</Text>
        <Text style={styles.description}>{item.issue_url}</Text>
        <Text style={styles.concept}>Number:</Text>
        <Text style={styles.description}>{item.number}</Text>
        <Text style={styles.concept}>User:</Text>
        <Text style={styles.description}>{item.user.login}</Text>
        <Text style={styles.concept}>Profile:</Text>
        <Text style={styles.description}>{item.user.url}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'left',
    marginHorizontal: 20,
  },
  concept: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'left',
    marginHorizontal: 20,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'left',
    marginHorizontal: 20,
  },
};

export default MapScreen;
