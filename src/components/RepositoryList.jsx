import { View, FlatList } from 'react-native'; 
import respositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';

export default function RepositoryList() {
  return (
    <FlatList 
      data={respositories}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      renderItem={({ item }) => (
        <RepositoryItem props={item} />
      )}>
    </FlatList>
  );
}