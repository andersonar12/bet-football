import { useSharedCounter } from "../../hooks/useSharedCounter";

export const Subpage2 = () => {
  const { count, dec } = useSharedCounter();
  return (
    <div>
      <h2>Subpage2</h2>
      <p>{count}</p>
      <button className="btn btn-success" onClick={dec}>
        Decrementar
      </button>
    </div>
  );
};
