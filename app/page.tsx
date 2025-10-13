import { Input } from "@/components/ui/input"
import Header from "./_components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import db from "@/lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

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
          <Button className="gap-2" variant="secondary">
            <Image
              src="/cabelo-icon.svg"
              alt="Ícone de tesoura"
              width={16}
              height={16}
            />
            Cabelo
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/barba-icon.svg" alt="Barba" width={16} height={16} />
            Barba
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento-icon.svg"
              alt="Acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento-icon.svg"
              alt="Acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento-icon.svg"
              alt="Acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              src="/acabamento-icon.svg"
              alt="Acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>
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

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit rounded-full bg-[#221C3D] font-bold text-[#8162FF]">
                Confirmado
              </Badge>
              <h3 className="text-lg font-bold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-sm font-[400]">Barbearia do Chiquinho</p>
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center gap-1 border-l-2 border-solid px-5">
              <p className="text-sm font-[400]">Outubro</p>
              <p className="text-2xl font-[400]">13</p>
              <p className="text-sm font-[400]">12:00</p>
            </div>
          </CardContent>
        </Card>

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
