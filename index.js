import React, { Component } from "react";
import { 
AppRegistry,
StyleSheet,
  Text,
    View
    } from 'react-native';
import App from './app/index.js';
export default class Client extends Component {
  render() {
      return (
            <View style={styles.container}>
	            <App {...this.props}/>
	     </View>
	     );
	    }
}

const styles = StyleSheet.create({
		  container: {
			     flex: 1
		            },
	           welcome: {
			      fontSize: 20,
    		              textAlign: 'center',
			      margin: 10,
	   	            },
	 	   instructions: {
			      textAlign: 'center',
	    	              color: '#333333',
			      marginBottom: 5,
			        },
			});
AppRegistry.registerComponent('client', () => Client);
