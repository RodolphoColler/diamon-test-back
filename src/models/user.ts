import IUser from "../interfaces/user";
import prisma from "../prisma/prisma";

export async function create({ name, phone, gender, birthDate, married, departmentId, comments }: IUser) {
  const user = await prisma.user.create({ 
    data: {
      name,
      phone,
      gender,
      birthDate,
      married,
      department: { connect: { id: departmentId } },
      comments
    }
  });

  return user;
}

export async function read() {
  const users = await prisma.user.findMany({
    include: { department: true },
  });

  return users;
}
