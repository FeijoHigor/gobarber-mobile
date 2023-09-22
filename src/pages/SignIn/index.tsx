import { Image, KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountText } from './styles'
import { ParamListBase, useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const SignIn = () => {
    const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    
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
                            <Title>Faça seu logon</Title>
                        </View>

                        <Input name='email' icon='mail' placeholder='E-mail' />
                        <Input name='password' icon='lock' placeholder='Senha'/>

                        <Button onPress={() => {}}>Entrar</Button>

                        <ForgotPassword onPress={() => {}} >
                            <ForgotPasswordText>
                                Esqueci minha senha
                            </ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <CreateAccountButton onPress={() => navigate('SignUp')} activeOpacity={1}>
                <Icon name='log-in' size={20} color='#ff9000' />
                <CreateAccountText>
                    Criar uma conta
                </CreateAccountText>
            </CreateAccountButton>
        </>
    )
}

export default SignIn