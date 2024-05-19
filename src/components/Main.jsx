import { View, Text } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Routes, Route, Navigate } from 'react-router-native';
export default function Main() {
  return (
    <View style={{ flex: 1 }}>
        <AppBar />
        <Routes>
          <Route path='/' element={
            <RepositoryList />
          } />
          <Route path='/signin' element={
            <Text>Sign In</Text>
          } />
          <Route path='*' element={
            <Navigate to='/' />
          } />
        </Routes>
    </View>
  );
}

