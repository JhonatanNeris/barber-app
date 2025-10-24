import Header from "./_components/header"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import db from "@/lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

import { quickSearchOptions } from "./_constants/search"
import BookingItem from "./_components/booking-item"
import Search from "./_components/search"
import Link from "next/link"
import { getConfirmedBookings } from "./_data/get-confirmed-bookings"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default async function Home() {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  console.log(barbershops)

  const confirmedBookings = await getConfirmedBookings()

  return (
    <div>
      {/* Header */}
      <Header />

      <div className="p-5">
        {/* SAUDAÇÃO */}
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "bem vindo"}!
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

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
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-[#838896]">
              Agendamentos
            </h2>

            {/* AGENDAMENTO */}
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </>
        )}

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
