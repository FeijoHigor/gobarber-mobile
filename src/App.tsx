import { StatusBar, View } from 'react-native'
import Routes from './routes'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
const App = () => {
    return (
        <NavigationContainer>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content"backgroundColor={"#312e38"} />
                <View style={{ backgroundColor: '#312e38', flex: 1 }}>
                    <Routes />
                </View>
            </GestureHandlerRootView>
        </NavigationContainer>
    )
}

export default App