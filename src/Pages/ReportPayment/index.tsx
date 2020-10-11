import React from 'react';
import {
Container,
ContainerPayments,
ContainerLogo,
ContainerInfoPays,
TextPay,
ContainerValue,
Price,
ContainerDescription,
ContainerLine,
Line,
TextDate,
ContainerDate,
ContainerBackground,
ContainerImage,
ContainerFilter,
ContainerGrey,
TextButton,
ContainerRed,
TextButtonRed
} from './styles';


import Header from '../../components/Header';
import balcao from '../../assets/balcao.png';
import { Image, ScrollView } from 'react-native';
import { View } from '../Home/styles';

const ReportPayment: React.FC = () => {

  return(
    <Container>
      <ScrollView>
      <Header title="Todos os meus pagamentos" />

      <View />

      <ContainerFilter>
        <ContainerGrey>
          <TextButton>Futuros</TextButton>
        </ContainerGrey>


        <ContainerRed>
          <TextButtonRed>Todos</TextButtonRed>
        </ContainerRed>


        <ContainerGrey>
          <TextButton>Últimos 7 dias</TextButton>
        </ContainerGrey>


        <ContainerGrey>
          <TextButton>Últimos mês</TextButton>
        </ContainerGrey>
      </ContainerFilter>
        
        <ContainerLine>
          <Line />

          <ContainerDate>
            <ContainerBackground>
              <TextDate>Hoje</TextDate>
            </ContainerBackground>
          </ContainerDate>
        </ContainerLine>

      
        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextPay>Água</TextPay>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 50,84</Price>
            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextPay>Energia</TextPay>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 30,84</Price>
            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextPay>Telefone</TextPay>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 70,84</Price>
            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerLine>
          <Line />

          <ContainerDate>
            <ContainerBackground>
              <TextDate>Ontem</TextDate>
            </ContainerBackground>
          </ContainerDate>
        </ContainerLine>

      
        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextPay>Mercadoria + Frete</TextPay>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 180,99</Price>
            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextPay>Encanador</TextPay>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 26,25</Price>
            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextPay>Produtos de limpeza</TextPay>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 14,58</Price>
            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerLine>
          <Line />

          <ContainerDate>
            <ContainerBackground>
              <TextDate>09 out</TextDate>
            </ContainerBackground>
          </ContainerDate>
        </ContainerLine>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextPay>Reposição de Estoque</TextPay>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 56,56</Price>
            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextPay>Mercadoria + Frete</TextPay>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 78,98</Price>
            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextPay>Produtos de Informártica</TextPay>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 145,40</Price>
            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

      </ScrollView>
    </Container>
  );
}

export default ReportPayment;