import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-paper';
import moment from 'moment';

const IpItem = ({navigation, item}) => {
	const color = Math.floor(1000 + Math.random() * 9000);
	return (
		<TouchableOpacity
			style={{margin: 10}}
			onPress={() => navigation.navigate('IpDetails', {item: item, color: color})}
		>
			<Card
				style={{
					padding: 10,
					// borderLeftWidth: 5,
					// borderColor: `#${Math.floor(1000 + Math.random() * 9000)}cf`
					backgroundColor: `#${color}cf`
				}}
			>
				<View style={{flexDirection: 'row', alignItems: 'center'}}>
					<View style={{width: '10%', justifyContent: 'center', alignItems: 'center'}}>
						{item.type === 'wifi' ? (
							<Icon size={30} name="wifi" color="#fff" />
						) : (
							<Icon size={45} name="mobile" color="#fff" />
						)}
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '90%',
							marginLeft: 15
						}}
					>
						<View>
							<Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>{item.ipaddress}</Text>
							<Text style={{color: '#DDDDDD', fontWeight: 'bold', fontSize: 16}}>{item.type}</Text>
						</View>
						<View style={{alignItems: 'flex-end', marginRight: 15}}>
							<Text style={{color: '#DDDDDD'}}>{moment(item.date).format('hh:mm:ss a')}</Text>
						</View>
					</View>
				</View>
			</Card>
		</TouchableOpacity>
	);
};

export default IpItem;
