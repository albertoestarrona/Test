import React, {Component} from 'react';
import {View, FlatList, ActivityIndicator, Alert} from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };
  }

  static navigationOptions = {
    title: 'Test',
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({loading: true});
    axios
      .get(
        'https://api.github.com/repos/facebook/react-native/pulls?state=all&per_page=100',
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data,
          error: response.error || null,
          loading: false,
        });
      })
      .catch((error) => {
        Alert.alert('Error fetching data');
        this.setState({error, loading: false});
      });
  };

  renderSeparator = () => {
    return <View style={styles.line} />;
  };

  onPressItem(item) {
    if (item === null) {
      Alert.alert('No GeoData available');
    } else {
      this.props.navigation.navigate('Detail', {
        item: item,
      });
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <ListItem
              title={item.title}
              rightTitle="Status"
              titleStyle={styles.title}
              subtitle={item.id}
              rightSubtitle={item.state}
              onPress={() => this.onPressItem(item)}
            />
          )}
          keyExtractor={(item) => item.symbol}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#CED0CE',
    marginLeft: '10%',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
};

export default HomeScreen;
