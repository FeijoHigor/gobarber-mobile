import { Container, ButtonText, IsideButton } from './styles'
import { RectButtonProperties } from 'react-native-gesture-handler'

interface ButtonProps extends RectButtonProperties {
    children?: string;
}

const Button = ({ children, ...rest }: ButtonProps) => {
    return (
        <Container>
            <IsideButton { ...rest }>
                <ButtonText>
                    {children}
                </ButtonText>
            </IsideButton>
        </Container>
    )
}

export default Button