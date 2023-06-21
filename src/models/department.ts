import prisma from "../prisma/prisma";

export async function create(name: string) {
  const department = await prisma.department.create({ data: { name } });

  return department;
}

export async function read() {
  const departments = await prisma.department.findMany();

  return departments;
}
