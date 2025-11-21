import { prisma } from "@/lib/prisma";
import { getZodiac } from "@/utils/zodiac";

export async function POST(req: Request) {
  const { userId } = await req.json();

  const user = await prisma.user.findUnique({
    where: { id: userId }
  });

  if (!user) {
    return Response.json({ error: "User not found" }, { status: 404 });
  }

  const zodiac = getZodiac(user.birthdate);

  const predictions = {
    Aries: "Hari ini kamu mungkin merasa lebih percaya diri.",
    Taurus: "Waktu yang tepat untuk fokus pada finansial.",
    Gemini: "Komunikasi berjalan lancar.",
    // ...dan seterusnya
  };

  return Response.json({
    zodiac,
    prediction: predictions[zodiac as keyof typeof predictions] || "Ramalan tidak tersedia."
  });
}
