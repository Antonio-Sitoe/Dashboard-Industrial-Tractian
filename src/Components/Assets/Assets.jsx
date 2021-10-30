import React from 'react';
import Error from '../Helper/Error';
import { SectionUser } from '../Users/style';
import useFetch from '../../Hooks/useFetch';
import { Links } from '../../GlobalStyles/GlobalStyles';
import {
  AssetsContainer,
  CardAssets,
  CenterButton,
  List,
  Name,
  Span,
} from './AssetsStyle';
import { GET_ASSETS } from '../../Services/Api';
import Loading from '../Helper/Loading';
import Image from '../Image/Image';

export const CleanElements = (element, unit = ' ') => {
  return element && unit ? `${element} ${unit}` : '--';
};

export const CleanStatus = (status) => {
  let color;
  switch (status) {
    case 'inAlert':
      color = '#DB303F';
      break;
    case 'inOperation':
      color = '#45C86D';
      break;
    default:
      color = '#DB8C28';
      break;
  }
  return <Span color={color}>{status}</Span>;
};

function Assets() {
  const { data, error, request, loading } = useFetch();

  React.useEffect(() => {
    async function FetchAssets() {
      const { url, options } = GET_ASSETS();
      await request(url, options);
    }
    let isAmounted = true;
    if (isAmounted) FetchAssets();
    return () => (isAmounted = false);
  }, []);

  if (error) return <Error error={error} />;
  if (data)
    return (
      <SectionUser>
        <AssetsContainer>
          {data.map(
            ({
              id,
              sensors,
              name,
              image,
              specifications,
              healthscore,
              status,
            }) => {
              return (
                <CardAssets key={id}>
                  <Name>{name}</Name>
                  <Image src={image} alt='Photos' height='18rem' />
                  <div>
                    <List>
                      <li>
                        <strong>Sensors: </strong>
                        {CleanElements(sensors[0])}
                      </li>
                      <li>
                        <strong>Temperature: </strong>
                        {CleanElements(specifications.maxTemp, 'ºC')}
                      </li>
                      <li>
                        <strong>Status: </strong>
                        {CleanStatus(status)}
                      </li>
                      <li>
                        <strong>Healthscore: </strong>
                        {CleanElements(healthscore, '%')}
                      </li>
                      <li>
                        <strong>Power: </strong>
                        {CleanElements(specifications.power, 'kWh')}
                      </li>
                    </List>
                    <CenterButton>
                      <Links to={`${id}`}>Informacao</Links>
                    </CenterButton>
                  </div>
                </CardAssets>
              );
            }
          )}
        </AssetsContainer>
      </SectionUser>
    );
  else {
    return loading && <Loading></Loading>;
  }
}

export default Assets;
