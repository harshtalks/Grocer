/*
  Warnings:

  - Added the required column `isCompleted` to the `ShoppingList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShoppingList" ADD COLUMN     "completedDate" TEXT,
ADD COLUMN     "isCompleted" BOOLEAN NOT NULL;
