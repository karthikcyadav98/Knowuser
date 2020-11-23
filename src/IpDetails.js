import React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Card} from 'react-native-paper';
import moment from 'moment';

const IpDetails = ({route, navigation}) => {
	const {item, color} = route.params;

	// const color = Math.floor(1000 + Math.random() * 9000);

	return (
		<View style={{flex: 1}}>
			<Appbar.Header style={{backgroundColor: '#fff'}}>
				<Appbar.BackAction onPress={() => navigation.goBack()} />
				<Appbar.Content title="Knowuser" />
			</Appbar.Header>
			<Card style={{margin: 10, padding: 10}}>
				<View>
					<View>
						<Text style={{color: `#${color}cf`, fontWeight: 'bold', fontSize: 30}}>{item.ipaddress}</Text>
						<Text style={{color: `#${color}cf`, fontWeight: 'bold', fontSize: 20}}>
							{item.type === 'wifi' ? 'Cellular to Wifi' : 'WiFi to Cellular'}
						</Text>
					</View>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{color: `#${color}cf`, fontWeight: 'bold'}}>
							{moment(item.date).format('hh:mm:ss a')}
						</Text>
					</View>
				</View>
			</Card>
		</View>
	);
};

export default IpDetails;
