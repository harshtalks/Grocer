/*
  Warnings:

  - You are about to drop the `ShoppingListItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ItemToShoppingListItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ShoppingListToShoppingListItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ItemToShoppingListItem" DROP CONSTRAINT "_ItemToShoppingListItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToShoppingListItem" DROP CONSTRAINT "_ItemToShoppingListItem_B_fkey";

-- DropForeignKey
ALTER TABLE "_ShoppingListToShoppingListItem" DROP CONSTRAINT "_ShoppingListToShoppingListItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_ShoppingListToShoppingListItem" DROP CONSTRAINT "_ShoppingListToShoppingListItem_B_fkey";

-- DropTable
DROP TABLE "ShoppingListItem";

-- DropTable
DROP TABLE "_ItemToShoppingListItem";

-- DropTable
DROP TABLE "_ShoppingListToShoppingListItem";

-- CreateTable
CREATE TABLE "ShoppingItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ShoppingItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ShoppingItemToShoppingList" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ShoppingItemToShoppingList_AB_unique" ON "_ShoppingItemToShoppingList"("A", "B");

-- CreateIndex
CREATE INDEX "_ShoppingItemToShoppingList_B_index" ON "_ShoppingItemToShoppingList"("B");

-- AddForeignKey
ALTER TABLE "ShoppingItem" ADD CONSTRAINT "ShoppingItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShoppingItemToShoppingList" ADD CONSTRAINT "_ShoppingItemToShoppingList_A_fkey" FOREIGN KEY ("A") REFERENCES "ShoppingItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShoppingItemToShoppingList" ADD CONSTRAINT "_ShoppingItemToShoppingList_B_fkey" FOREIGN KEY ("B") REFERENCES "ShoppingList"("id") ON DELETE CASCADE ON UPDATE CASCADE;
