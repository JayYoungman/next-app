import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const IndexContainer: NextPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("results");
  });

  return null;
};
