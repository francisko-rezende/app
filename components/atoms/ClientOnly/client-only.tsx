import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function ClientOnly({ children }: { children: Function }) {
  const isServer = useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true
  );

  return isServer ? null : children();
}

export default ClientOnly;
