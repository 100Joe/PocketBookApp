import { Text, StyleSheet, View } from 'react-native';
import BillList from './BillList';

export default function Main() {
  return (
    <View>
      <BillList />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25
  },
});