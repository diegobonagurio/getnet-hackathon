import React from 'react';
import {
Container,
ContainerPayments,
ContainerLogo,
ContainerInfoPays,
TextSales,
ContainerValue,
Price,
ContainerDescription,
ContainerLine,
Line,
TextDate,
ContainerDate,
ContainerBackground,
TextDesc,
TextTime,
ContainerFilter,
ContainerGrey,
TextButton,
ContainerRed,
TextButtonRed
} from './styles';


import Header from '../../components/Header';
import balcao from '../../assets/balcao.png';
import getnet from '../../assets/getnet.png';
import { Image, ScrollView } from 'react-native';
import { View } from '../Home/styles';

const ReportSales: React.FC = () => {

  return(
    <Container>
      <ScrollView>
      <Header title="Todas as minhas vendas"/>

      <View />

      <ContainerFilter>
        <ContainerGrey>
          <TextButton>Futuras</TextButton>
        </ContainerGrey>


        <ContainerRed>
          <TextButtonRed>Todas</TextButtonRed>
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
            <Image source={getnet} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextSales>Venda Getnet</TextSales>
              <TextDesc>Link de Pagamento</TextDesc>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 1489,36</Price>
              <TextTime>17:00</TextTime>

            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>
     
        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextSales>Venda Balcão</TextSales>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 1239,36</Price>

            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={getnet} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextSales>Venda Getnet</TextSales>
              <TextDesc>Boleto</TextDesc>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 1739,36</Price>
              <TextTime>09:27</TextTime>

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
              <TextSales>Venda Balcão</TextSales>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 100,80</Price>

            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={balcao} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextSales>Venda Balcão</TextSales>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 85,70</Price>

            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={getnet} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextSales>Venda Getnet</TextSales>
              <TextDesc>QR Code</TextDesc>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 20,50</Price>
              <TextTime>15:00</TextTime>

            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={getnet} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextSales>Venda Getnet</TextSales>
              <TextDesc>SuperGet</TextDesc>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 45,60</Price>
              <TextTime>07:27</TextTime>

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
              <TextSales>Venda Balcão</TextSales>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 11,90</Price>

            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={getnet} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextSales>Venda Getnet</TextSales>
              <TextDesc>SuperGet</TextDesc>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 260,00</Price>
              <TextTime>18:00</TextTime>

            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

        <ContainerPayments>
          <ContainerLogo>
            <Image source={getnet} />
          </ContainerLogo>

          <ContainerDescription>
            <ContainerInfoPays>
              <TextSales>Venda Getnet</TextSales>
              <TextDesc>SuperGet</TextDesc>
            </ContainerInfoPays>

            <ContainerValue>
              <Price>R$ 176,58</Price>
              <TextTime>12:01</TextTime>

            </ContainerValue>
          </ContainerDescription>
        </ContainerPayments>

      </ScrollView>
    </Container>
  );
}

export default ReportSales;