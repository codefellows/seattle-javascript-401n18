import Auth from './auth/Auth.js';

function Content() {

  return (
    <>
      <h2>Everyone Can See This</h2>

      <Auth>
        <h2>Anyone that is LOGGED IN can see this</h2>
      </Auth>

      <Auth capability="read">
        <h2>Anyone that can READ can see this</h2>
      </Auth>

      <Auth capability="create">
        <h2>Anyone that can CREATE can see this</h2>
      </Auth>

      <Auth capability="update">
        <h2>Anyone that can UPDATE can see this</h2>
      </Auth>

      <Auth capability="delete">
        <h2>Anyone that can DELETE can see this</h2>
      </Auth>

    </>
  )

}

export default Content;
