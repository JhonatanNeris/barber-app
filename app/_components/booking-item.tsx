import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Prisma } from "../generated/prisma"
import { format, isFuture } from "date-fns"
import { ptBR } from "date-fns/locale"

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: {
        include: {
          barbershop: true
        }
      }
    }
  }>
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isConfirmed = isFuture(booking.date)

  return (
    <Card className="w-full min-w-[90%]">
      <CardContent className="flex justify-between p-0">
        {/* ESQUERDA */}
        <div className="flex flex-col gap-2 py-5 pl-5">
          <Badge
            className="w-fit rounded-full font-bold"
            variant={isConfirmed ? "default" : "secondary"}
          >
            {isConfirmed ? "Confirmado" : "Finalizado"}
          </Badge>
          <h3 className="text-lg font-bold">{booking.service.name}</h3>

          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={booking.service.barbershop.imageUrl} />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <p className="text-sm font-[400]">
              {booking.service.barbershop.name}
            </p>
          </div>
        </div>

        {/* DIREITA */}
        <div className="flex flex-col items-center justify-center gap-1 border-l-2 border-solid px-5">
          <p className="text-sm capitalize">
            {format(booking.date, "MMMM", { locale: ptBR })}
          </p>
          <p className="text-2xl">
            {format(booking.date, "dd", { locale: ptBR })}
          </p>
          <p className="text-sm">
            {format(booking.date, "HH:mm", { locale: ptBR })}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookingItem
