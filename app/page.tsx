import { Input } from "@/components/ui/input"
import Header from "./_components/header"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

export default function Home() {
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

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner_01.png"
            alt="Banner"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  )
}
