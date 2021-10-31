import React from 'react';
import { SectionUser } from '../../Users/style';

import { GeneralInfo, HealthInfo } from './SingleStyle';

import AssetStatusComponent from './AssetStatusComponent';
import AssetConfComponent from './AssetConfComponent';
import AssetUptimeComponent from './AssetUptimeComponent';
import AssetRespoComponent from './AssetRespoComponent';
import AssetGraphComponent from './AssetGraphComponent';
import { useParams } from 'react-router';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import { GET_ASSETID } from '../../../Services/Api';
import { UserContext } from '../../../Context/UserContext';

const InfoAsideComponent = React.lazy(() => import('./InfoAsideComponent'));
function SingleAssets() {
  const { data, error, request, loading } = useFetch();
  const { id } = useParams();
  const { setMachineName } = React.useContext(UserContext);

  React.useEffect(() => {
    async function GetAssets() {
      const { url, options } = GET_ASSETID(id);
      const { json, response } = await request(url, options);
      if (response.ok) {
        setMachineName(json.name);
      }
    }
    let anmout = true;
    if (anmout) GetAssets();

    return () => (anmout = false);
  }, []);
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <SectionUser>
          <GeneralInfo>
            <InfoAsideComponent data={data} />
            <HealthInfo>
              <AssetGraphComponent data={data} />
              <AssetStatusComponent data={data.status} />
              <AssetConfComponent data={data.healthscore} />
              <AssetUptimeComponent data={data.metrics} />
              <AssetRespoComponent />
            </HealthInfo>
          </GeneralInfo>
        </SectionUser>
      </React.Suspense>
    );
  return loading && <Loading />;
}

export default SingleAssets;
