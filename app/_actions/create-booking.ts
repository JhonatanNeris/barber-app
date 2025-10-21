"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"
import db from "@/lib/prisma"
import { authOptions } from "@/lib/auth"

interface CreateBookingParams {
  serviceId: string
  date: Date
}

export const createBooking = async (params: CreateBookingParams) => {
  const user = await getServerSession(authOptions)
  if (!user) {
    throw new Error("Usuário não autenticado")
  }
  await db.booking.create({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: { ...params, userId: (user.user as any).id },
  })
  revalidatePath("/barbershops/[id]")
  revalidatePath("/bookings")
}
