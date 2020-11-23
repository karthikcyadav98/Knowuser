import React, {useState, useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {NetworkInfo} from 'react-native-network-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appbar, Card} from 'react-native-paper';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import IpItem from './IpItem';

const IpList = ({navigation}) => {
	const [connType, setConnType] = useState('');
	const [ipaddress, setIpaddress] = useState('');
	const [date, setDate] = useState(Date.now());
	const [ipdata, setIpdata] = useState([]);
	const [isLoading, setLoading] = useState(true);

	let connection = {};
	let unsubscribe = NetInfo.addEventListener(state => {
		connection = state;
	});

	useEffect(
		() => {
			// AsyncStorage.clear();
			getDetails();
		},
		[unsubscribe, connection]
	);

	const getDetails = async () => {
		let type = 'none';
		let ipaddress = 'none';
		unsubscribe = NetInfo.addEventListener(state => {
			setConnType(state.type);
			type = state.type;
		});

		NetworkInfo.getIPAddress().then(ipAddress => {
			setIpaddress(ipAddress);
			ipaddress = ipAddress;
		});

		await AsyncStorage.getItem('details')
			.then(async details => {
				if (details !== null) setIpdata(details);
				if (type !== 'none' && ipaddress !== 'none') {
					let prevData = details !== null ? details : [];
					const data = {
						type: type,
						ipaddress: ipaddress,
						date: Date.now()
					};
					prevData.push(data);
					setIpdata(prevData);
				}

				if (details !== null) {
					try {
						await AsyncStorage.setItem('details', prevData);
					} catch (err) {
						console.error(err);
					}
				}
			})
			.catch(err => console.error(err));
		setLoading(false);
	};

	return (
		<View style={{flex: 1, backgroundColor: '#fff'}}>
			<Appbar.Header style={{backgroundColor: '#fff'}}>
				{/* <Appbar.BackAction onPress={() => navigation.goBack()} /> */}
				<Appbar.Content title="Knowuser" />
			</Appbar.Header>
			<Text>{connection.type}</Text>
			<FlatList
				keyExtractor={item => item.date.toString()}
				data={ipdata}
				renderItem={({item}) => <IpItem navigation={navigation} item={item} />}
			/>
		</View>
	);
};

export default IpList;
