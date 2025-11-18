"use client";

import { useParams } from "next/navigation";
import PokemonDetail from "@/components/PokemonDetail";

export default function PokemonDetailPage() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  return <PokemonDetail id={id} />;
}