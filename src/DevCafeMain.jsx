import { useEffect, useState } from "react";
import Router from "./Router";
import Layout from "./components/Layout";
import useLocalStorage from "./common/hooks/useLocalStorage";

export default function DevCafeMain() {
  const [singleDataValue, setSingleDataValue] = useLocalStorage(
    "singleData",
    undefined
  );

  useEffect(() => {
    setSingleDataValue(undefined);
  }, [setSingleDataValue]);

  return (
    <Layout>
      <Router />
    </Layout>
  );
}
