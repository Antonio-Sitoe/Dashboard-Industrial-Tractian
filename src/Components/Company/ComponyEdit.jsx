import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../GlobalStyles/GlobalStyles';
import useFetch from '../../Hooks/useFetch';
import { GET_COMPANY, GET_UNITS, PUT_COMPANY } from '../../Services/Api';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import { SectionUser } from '../Users/style';
import { ComponyEditStyle } from './Style';

import { DefaultValues } from './DefaultValues';

function ComponyEdit() {
  const { request, error, loading } = useFetch();
  const [name, setName] = useState(null);
  const [uni, setUni] = useState(null);
  const [about, setAbout] = React.useState(DefaultValues.about);
  const [location, setlocation] = React.useState(DefaultValues.location);

  const [CompanyName, setCompanyName] = useState('');
  const [changeBtn, setChangeBtn] = useState(false);
  const navigate = useNavigate();

  async function handleUpdate() {
    setChangeBtn(true);
    const { url, options } = PUT_COMPANY({ name: CompanyName });
    const { response } = await request(url, options);
    if (response.ok) {
      setChangeBtn(false);
      navigate('/dashboard/company');
    }
  }

  React.useEffect(() => {
    async function getEditCampany() {
      const units = GET_UNITS();
      const company = GET_COMPANY();
      const responseUnits = await request(units.url, units.options);
      const responseCompany = await request(company.url, company.options);
      setUni(responseUnits.json);
      setName(responseCompany.json);
      setCompanyName(responseCompany.json.name);
    }
    getEditCampany();
  }, [request]);

  if (error) return <Error error={error} />;
  if (name && uni)
    return (
      <SectionUser>
        <ComponyEditStyle>
          <Input
            label="Company's name"
            value={CompanyName}
            type='text'
            onChange={({ target }) => setCompanyName(target.value)}
          />
          <p>About</p>
          {console.log()}
          <textarea
            value={about}
            onChange={({ target }) => setAbout(target.value)}
          />
          <p>Location</p>
          <textarea
            value={location}
            onChange={({ target }) => setlocation(target.value)}
          />
          <select name='units' id='units'>
            {uni.map(({ name, id }) => {
              return (
                <option key={id} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
          <Button onClick={handleUpdate}>
            {changeBtn ? '...Loading' : 'Save'}
          </Button>
        </ComponyEditStyle>
      </SectionUser>
    );
  else return loading && <Loading />;
}

export default ComponyEdit;
