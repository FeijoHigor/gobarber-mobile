import { StatusBar, View } from 'react-native'
import Routes from './routes'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import AppProvider from './hooks'

const App = () => {
    return (
        <NavigationContainer>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <StatusBar barStyle="light-content"backgroundColor={"#312e38"} />
                <AppProvider>
                    <View style={{ backgroundColor: '#312e38', flex: 1 }}>
                        <Routes />
                    </View>
                </AppProvider>
            </GestureHandlerRootView>
        </NavigationContainer>
    )
}

export default App