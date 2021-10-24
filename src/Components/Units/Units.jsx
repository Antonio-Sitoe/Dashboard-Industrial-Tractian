import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { GET_UNITS } from '../../Services/Api';
import { Card, SectionUser, Title } from '../Users/style';
import { Graphs, MainUnits } from './Unistyle';
import Loading from '../Helper/Loading';
import { Button } from '../../GlobalStyles/GlobalStyles';

function Units() {
  const { data, request, loading, error } = useFetch();
  React.useEffect(() => {
    async function getUnit() {
      const { url, options } = GET_UNITS();
      await request(url, options);
    }
    getUnit();
  }, []);
  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  if (data)
    return (
      <SectionUser>
        <MainUnits>
          {data.map(({ id, name }) => {
            return (
              <Graphs key={id}>
                <Card> grafico</Card>
                <Card>
                  <Title>{name}</Title>
                  <p>
                    {name} ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus itaque quae hic molestias aliquid adipisci totam
                    omnis quo voluptatem veniam reprehenderit architecto amet
                    vero laudantium deleniti, iusto natus sapiente! Corrupti.
                    <span>
                      Rua Azevedo Macedo, N°20 - 10° andar - Vila Mariana, São
                      Paulo - SP, 04013-060
                    </span>
                  </p>
                </Card>
              </Graphs>
            );
          })}
        </MainUnits>
        <Button>Add Unit</Button>
      </SectionUser>
    );
  return <>{loading ? <Loading /> : null}</>;
}

export default Units;
