import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Dashboard = () => {
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://api.thingspeak.com/channels/2068822/feeds.json?api_key=O4UO2E3ETQILY3RJ&results=2'
            );
            const data = response.data.feeds[0];
            setTemperature(data.field1);
            setHumidity(data.field2);
        } catch (error) {
            console.error(error);
        }
    };
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Text style={styles.Text} >Temperatura: {temperature}°C</Text>
            <Text style={styles.Text} >Umidade: {humidity}%</Text>
        </View>
    );
};
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
});

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';

// const Dashboard = () => {
//   const [data, setData] = useState({ labels: [], temperature: [], humidity: [] });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         'https://api.thingspeak.com/channels/2068822/feeds.json?api_key=O4UO2E3ETQILY3RJ&results=20'
//       );

//       const feeds = response.data.feeds;
//       const labels = feeds.map(feed => feed.created_at);
//       const temperature = feeds.map(feed => parseFloat(feed.field1));
//       const humidity = feeds.map(feed => parseFloat(feed.field2));

//       setData({ labels, temperature, humidity });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         label: 'Temperature (°C)',
//         data: data.temperature,
//         fill: false,
//         borderColor: 'red',
//       },
//       {
//         label: 'Humidity (%)',
//         data: data.humidity,
//         fill: false,
//         borderColor: 'blue',
//       },
//     ],
//   };

//   return (
//     <div>
//       <h1>ThingSpeak Dashboard</h1>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default Dashboard;
