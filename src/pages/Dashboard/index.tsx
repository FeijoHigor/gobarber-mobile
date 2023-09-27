import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";

import Icon from "react-native-vector-icons/Feather";

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProvidersListTitle,
} from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import api from "../../services/api";

export interface Provider {
  id: string;
  name: string;
  avatar: string;
}

const Dashboard = () => {
  const { signOut, user } = useAuth();
  const [providers, setProviders] = useState<Provider[]>([]);

  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  useEffect(() => {
    api.get("providers").then((response) => {
      setProviders(response.data);
    });
  }, []);

  const navigateToProfile = useCallback(() => {
    //navigate("Profile");
    signOut();
  }, [navigate]);

  const navigateToCreateAppointment = useCallback(
    (providerId: string) => {
      navigate("CreateAppointment", { providerId });
    },
    [navigate]
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {"\n"}
          <UserName>{user.name}</UserName>
        </HeaderTitle>

        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar
            source={{ uri: `http://localhost:3333/files/${user.avatar}` }}
          />
        </ProfileButton>
      </Header>

      <ProvidersList
        data={providers}
        ListHeaderComponent={
          <ProvidersListTitle>Cabeleireiros</ProvidersListTitle>
        }
        keyExtractor={(provider) => provider.id}
        renderItem={({ item: provider }) => (
          <ProviderContainer
            onPress={() => navigateToCreateAppointment(provider.id)}
          >
            <ProviderAvatar
              source={{
                uri: `http://localhost:3333/files/${provider.avatar}`,
              }}
            />

            <ProviderInfo>
              <ProviderName>{provider.name}</ProviderName>

              <ProviderMeta>
                <Icon name="calendar" size={14} color={"#ff9000"} />
                <ProviderMetaText>Segunda à sexta</ProviderMetaText>
              </ProviderMeta>

              <ProviderMeta>
                <Icon name="clock" size={14} color={"#ff9000"} />
                <ProviderMetaText>8h às 18h</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />
    </Container>
  );
};

export default Dashboard;
