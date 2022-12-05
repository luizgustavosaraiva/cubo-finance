import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const DUE_DATE_IN_DAYS = 10;
  const user = await prisma.user.upsert({
    where: { email: 'Cristobal_Johnston@gmail.com' },
    create: {
      email: 'Cristobal_Johnston@gmail.com',
      profileImage: faker.image.avatar(),
    },
    update: {},
  });

  const creditCardPaymentMethod = await prisma.paymentMethod.upsert({
    where: { title: 'Cartão de crédito' },
    create: {
      title: 'Cartão de crédito',
    },
    update: {},
  });

  await prisma.expense.upsert({
    where: { id: 1 },
    create: {
      amount: faker.finance.amount(),
      description: faker.lorem.paragraph(),
      dueDate: faker.date.soon(DUE_DATE_IN_DAYS).toISOString(),
      isInstallment: true,
      installmentsNumber: faker.datatype.number({ max: 20 }),
      title: faker.lorem.words(DUE_DATE_IN_DAYS),
      userId: user.id,
      paymentMethodId: creditCardPaymentMethod.id,
    },
    update: {},
  });
}

main();
