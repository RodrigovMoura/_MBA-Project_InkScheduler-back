/*
  Warnings:

  - You are about to drop the column `date` on the `Appointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "date",
ADD COLUMN     "selectedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
