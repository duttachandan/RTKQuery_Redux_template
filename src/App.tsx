import { useGetAllTodosQuery } from "./features/todos/todoSlice";

function App() {
  const { data, error, isLoading } = useGetAllTodosQuery();

  return (
    <>
      <section>
        {error ? (
          <>Error Occured</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          data.map((elem) => {
            return (
              <>
                <div key={elem.id}>{elem.title}</div>
              </>
            );
          })
        ) : null}
      </section>
    </>
  );
}

export default App;


