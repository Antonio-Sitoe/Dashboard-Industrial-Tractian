import React from 'react';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import {
  GET_ASSETS,
  GET_UNITS,
  GET_USERS,
  POST_UNIT,
} from '../../Services/Api';
import { Card, SectionUser, Title } from '../Users/style';
import { Graphs, MainUnits, TextArea } from './Unistyle';
import Loading from '../Helper/Loading';
import { Button } from '../../GlobalStyles/GlobalStyles';
import UnitGraphs from './UnitGraphs';
import Modal from '../Modal/Modal';
import { UserContext } from '../../Context/UserContext';
import Input from '../Forms/Input';

function Units() {
  const { openModal, setOpenModal } = React.useContext(UserContext);
  const [load, setLoad] = React.useState(false);

  const [unitValueName, setUnitValueName] = React.useState('');
  const [textAbout, setTextAbout] = React.useState('');

  const { request, loading, error } = useFetch();
  const [unit, setUnit] = React.useState(null);
  const [asset, setAssets] = React.useState(null);
  const [user, setUser] = React.useState(null);

  async function handleChange(e) {
    e.preventDefault();
    setLoad(true);
    const { url, options } = POST_UNIT();
    const { response } = await request(url, options);
    if (response.ok) {
      setOpenModal(false);
    }
  }

  React.useEffect(() => {
    let isAmounted = true;
    async function getUnit() {
      const { url, options } = GET_UNITS();
      const units = await request(url, options);
      setUnit(units.json);

      const userFunction = GET_USERS();
      const users = await request(userFunction.url, userFunction.options);
      setUser(users.json);

      const assetFuntion = GET_ASSETS();
      const assets = await request(assetFuntion.url, assetFuntion.options);
      setAssets(assets.json);
    }
    if (isAmounted) getUnit();
    return () => (isAmounted = false);
  }, [request]);

  function GetElementsDateFilter(id, title) {
    let assetValue = asset.filter(({ unitId }) => unitId === id).length;
    let userValue = user.filter(({ unitId }) => unitId === id).length;
    return (
      <UnitGraphs title={title} assetValue={assetValue} userValue={userValue} />
    );
  }

  if (error) return <Error error={error} />;
  if (unit && user && asset)
    return (
      <SectionUser>
        <MainUnits>
          {unit.map(({ id, name }) => {
            return (
              <Graphs key={id}>
                <Card>{GetElementsDateFilter(id, name)}</Card>
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
        <Button onClick={() => setOpenModal(true)}>Add Unit</Button>
        {openModal && (
          <Modal title='Add units' handleChange={handleChange} load={load}>
            <Input
              type='text'
              name='unit'
              label='Unit name'
              value={unitValueName}
              onChange={({ target }) => setUnitValueName(target.value)}
              placeholder='Unit name'
              disabled={!load ? false : true}
            />
            <div>
              <TextArea
                name='about'
                id='about'
                disabled={!load ? false : true}
                cols='30'
                rows='10'
                value={textAbout}
                onChange={({ target }) => setTextAbout(target.value)}
                placeholder='Write more about the unit'
              ></TextArea>
            </div>
          </Modal>
        )}
      </SectionUser>
    );
  return <>{loading ? <Loading /> : null}</>;
}

export default Units;
