import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import React from "react"
import { Barbershop, BarbershopService } from "../generated/prisma"

interface BookingSummaryProps {
  service: Pick<BarbershopService, "name" | "price">
  barbershop: Pick<Barbershop, "name">
  selectedDate: Date
}

const BookingSummary = ({
  service,
  barbershop,
  selectedDate,
}: BookingSummaryProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3 p-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">{service.name}</h2>
          <p className="text-sm font-bold">
            {Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(Number(service.price))}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-gray-400">Data</h2>
          <p className="text-sm">
            {format(selectedDate, "d 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-gray-400">Horário</h2>
          <p className="text-sm">{format(selectedDate, "HH:mm")}</p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-gray-400">Barbearia</h2>
          <p className="text-sm">{barbershop.name}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookingSummary
