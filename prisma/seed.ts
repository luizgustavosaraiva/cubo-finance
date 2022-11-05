import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // const moneyPaymentMethod = await prisma.paymentMethod.create({
  //   data: { title: 'Dinheiro' },
  // });

  // const creditCardPaymentMethod = await prisma.paymentMethod.create({
  //   data: { title: 'Cartão de crédito' },
  // });

  // const debitCardPaymentMethod = await prisma.paymentMethod.create({
  //   data: { title: 'Cartão de débito' },
  // });

  // const bankSlipPaymentMethod = await prisma.paymentMethod.create({
  //   data: { title: 'Boleto' },
  // });

  // await prisma.expense.create({
  //   data: {
  //     dueDate: new Date('2022-11-10').toISOString(),
  //     createdAt: new Date().toISOString(),
  //     installmentsNumber: 1,
  //     isInstallment: true,
      
  //     paymentMethodId: moneyPaymentMethod.id,
  //     title: 'Conta de água',
  //   },
  // });
}

main();
