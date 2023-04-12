import { Helmet } from "react-helmet";

function Movies() {
  return (
    <div className="comp orange">
      <Helmet>
        <title>HALO PAPAYERA</title>
        <meta name="description" content="TULEPERA" />
        {/* <meta
          name="image"
          property="og:image"
          content="https://storage.googleapis.com/insignias-us-west2-asdfinsignias/badges/clab5njku1211201wz50kdgtgr/BADGED_GRANDES_GENIOS_TALLER_INSIGNIAS_DIGITALES.png"
        /> */}
        <meta
          name="image"
          property="og:image"
          content="https://img.freepik.com/foto-gratis/conejito-feliz-muchos-huevos-pascua-hierba-fondo-festivo-diseno-decorativo_90220-1091.jpg?w=1380&t=st=1681318254~exp=1681318854~hmac=0e72c39c1597e36bb43da2bc43c1b7d20ff305a9182f141d5e920ae4b07deb72"
        />
      </Helmet>
      <h1>Movies Component</h1>
    </div>
  );
}

export default Movies;
