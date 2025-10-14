import { Input } from "@/components/ui/input"
import Header from "./_components/header"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

import db from "@/lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  console.log(barbershops)

  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jhonatan!</h2>
        <p>Segunda-feira, 05 de agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Buscar serviços..." />
          <Button className="">
            <SearchIcon />
          </Button>
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button key={option.label} className="gap-2" variant="secondary">
              <Image
                src={option.iconUrl}
                alt={option.label}
                width={16}
                height={16}
              />
              {option.label}
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
