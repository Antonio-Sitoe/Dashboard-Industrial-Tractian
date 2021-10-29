import React from 'react';
import Error from '../Helper/Error';
import { Links } from '../../GlobalStyles/GlobalStyles';
import useFetch from '../../Hooks/useFetch';
import { GET_ASSET, GET_COMPANY } from '../../Services/Api';
import Loading from '../Helper/Loading';
import Image from '../Image/Image';
import { Card, SectionUser, Title } from '../Users/style';
import { BtnStyleCampany, Main } from './Style';
import { DefaultValues } from './DefaultValues';

function Company() {
  const { request, error, loading } = useFetch();
  const [dataPhoto, setDataPhoto] = React.useState(null);
  const [name, setName] = React.useState(null);
  React.useEffect(() => {
    async function GetCompany() {
      const companyTitle = GET_COMPANY();
      const assetPhoto = GET_ASSET();
      const asset = await request(assetPhoto.url, assetPhoto.options);
      const company = await request(companyTitle.url, companyTitle.options);
      setName(company.json);
      setDataPhoto(asset.json);
    }
    let isAmounted = true;
    if (isAmounted) GetCompany();
    return () => (isAmounted = false);
  }, []);

  if (error) return <Error error={error} />;
  if (name && dataPhoto)
    return (
      <SectionUser>
        <Main>
          <Image
            src={dataPhoto.image}
            alt='Imagem de backgroun'
            height='25rem'
            minHeight='15rem'
          />
          <Card>
            <Title>{name.name}</Title>
            <h4>About</h4>
            <p>{DefaultValues.about}</p>

            <h4>Location</h4>
            <ul>
              <li>
                <p>Sao Paulo</p>
              </li>
              <li>
                <p>Brasil</p>
              </li>
            </ul>

            <h4>Units</h4>
            <p> Unidade Jaguar </p>
            <p> Unidade Tobias </p>
          </Card>

          <BtnStyleCampany>
            <Links to='edit'>Edit</Links>
          </BtnStyleCampany>
        </Main>
      </SectionUser>
    );
  return <>{loading ? <Loading></Loading> : null}</>;
}

export default Company;
