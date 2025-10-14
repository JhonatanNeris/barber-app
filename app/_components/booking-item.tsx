import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const BookingItem = () => {
  return (
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
  )
}

export default BookingItem
