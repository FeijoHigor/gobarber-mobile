import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Container, Title, BackToSignIn, BackToSignInText } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const SignUp = () => {

    const { goBack } = useNavigation()

    return (
        <>
            <KeyboardAvoidingView 
                enabled 
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <Container>
                        <Image source={logoImg} />

                        <View>
                            <Title>Crie sua conta</Title>
                        </View>

                        <Input name='name' icon='user' placeholder='Nome' />
                        <Input name='email' icon='mail' placeholder='E-mail' />
                        <Input name='password' icon='lock' placeholder='Senha'/>

                        <Button onPress={() => {}}>Entrar</Button>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <BackToSignIn onPress={() => goBack()} activeOpacity={1}>
                <Icon name='arrow-left' size={20} color='#fff' />
                <BackToSignInText>
                    Voltar para logon
                </BackToSignInText>
            </BackToSignIn>
        </>
    )
}

export default SignUp