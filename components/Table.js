import style from "../styles/table.module.scss";
import useMods from "../hooks/useMods";
import Spinner from "../components/Spinner";

const Table = ({ query, addMod }) => {
  const myMods = useMods();
  const { isLoaded, error, mods } = myMods;

  const search = (data) => {
    if (query.length > 3) {
      return data.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }
    return mods;
  };

  return (
    <>
      {error && (
        <div>
          <h1>Error during loading the mods: {error}</h1>
        </div>
      )}

      {!isLoaded && <Spinner />}

      {isLoaded && !error && (
        <>
          {query.length > 3 && (
            <div className={style.searchResultCounter}>
              <p>
                Found {search(mods).length} mods that contains {query}.
              </p>
            </div>
          )}

          <table className={style.table}>
            <thead>
              <tr>
                <th>Type</th>
                <th>Name</th>
                <th>Full Descriptions</th>
              </tr>
            </thead>

            <tbody>
              {search(mods).map((jewel) => (
                <tr key={jewel.name} onClick={() => addMod(jewel)}>
                  <td id="preSuff">{jewel.prefsuff}</td>
                  <td id="name">{jewel.name}</td>
                  <td id="fullDesc">{jewel.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Table;
