import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

let AppQuote;
export default AppQuote = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/Protich19/8848b510a7bc5599562c1d2f01b0cdb9/raw/d8b71a1690a4c16d343c926218a7f36d7cdf83c8/quotes.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json.quotes))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({quote}, index) => quote}
          renderItem={({item}) => (
            <Text>
              {item.text}, {item.author}
            </Text>
          )}
        />
      )}
    </View>
  );
};
