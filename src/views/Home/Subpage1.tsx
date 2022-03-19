import { useSharedCounter } from "../../hooks/useSharedCounter";

export const Subpage1 = () => {
  const { count, inc } = useSharedCounter();
  return (
    <div>
      <h2>Subpage1</h2>
      <p>{count}</p>
      <button className="btn btn-success" onClick={inc}>
        Incrementar
      </button>
    </div>
  );
};
