import Header from "./_components/header"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import db from "@/lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  console.log(barbershops)

  return (
    <div>
      {/* Header */}
      <Header />

      <div className="p-5">
        {/* SAUDAÇÃO */}
        <h2 className="text-xl font-bold">Olá, Jhonatan!</h2>
        <p>Segunda-feira, 05 de agosto</p>

        {/* BUSCA */}
        <div className="mt-6">
          <Search />
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.label}
              asChild
            >
              <Link href={`/barbershops?service=${option.label}`}>
                <Image
                  src={option.iconUrl}
                  width={16}
                  height={16}
                  alt={option.label}
                />
                {option.label}
              </Link>
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner_01.png"
            alt="Banner"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Agendamento */}
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-[#838896]">
          Agendamentos
        </h2>
        <BookingItem />

        {/* Recomendados */}
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-[#838896]">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((item) => (
            <BarbershopItem key={item.id} barbershop={item} />
          ))}
        </div>

        {/* Populares */}
        <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-[#838896]">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((item) => (
            <BarbershopItem key={item.id} barbershop={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
