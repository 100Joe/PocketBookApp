import { StyleSheet, Text, View } from 'react-native';
import NewBill from './NewBill';

export default function BillList() {
  return (
    <View style={styles.container}>
      <View style={styles.billWrapper}>
        <Text style={styles.sectionTitle}>Monthly Bills</Text>
        <View style={styles.bills}>
          <NewBill text={'Bill 1'} />
          <NewBill text={'Bill 2'} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    marginTop: 25,
  },
  billWrapper: {
    paddingTop: 25,
    paddingHorizontal: 165,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bills: {

  },
});