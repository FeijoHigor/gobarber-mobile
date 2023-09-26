import { View, Button } from 'react-native'

import { useAuth } from '../../hooks/auth'

const Dashboard = () => {
    const { signOut, user } = useAuth()
    console.log('user', user)
    
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button title='Sair' onPress={signOut} />
        </View>
    )
}

export default Dashboard