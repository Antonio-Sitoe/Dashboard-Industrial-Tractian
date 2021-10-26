import React from 'react';
import { Button } from '../../GlobalStyles/GlobalStyles';
import useFetch from '../../Hooks/useFetch';
import { GET_ASSET, GET_COMPANY } from '../../Services/Api';
import Loading from '../Helper/Loading';
import Image from '../Image/Image';
import { Card, SectionUser, Title } from '../Users/style';
import { Main } from './Style';

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

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );
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
            <p>
              A {name.name} pelo monitoramento de máquinas com sua própria
              tecnlogia tem crescido a cada ano. Hoje nós temos 1 empresa e
              possuímos em nossas dependências 2 unidades que se destacam das
              mais diversas formas. Possuímos exatos 10 ativos e 6 usuários
              ativos no momento. Os planos para o futuro é apresentar uma
              estratégia mais agressiva para o crescimento da empresa.
            </p>

            <h4>Location</h4>
            <ul>
              <li>
                {' '}
                <p>Sao Paulo</p>
              </li>
              <li>
                {' '}
                <p>Brasil</p>
              </li>
            </ul>

            <h4>Units</h4>
            <p> Unidade Jaguar </p>
            <p> Unidade Tobias </p>
          </Card>
          <Button>Edit</Button>
        </Main>
      </SectionUser>
    );
  return <>{loading ? <Loading></Loading> : null}</>;
}

export default Company;
