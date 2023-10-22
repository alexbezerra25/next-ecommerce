/*
  Warnings:

  - You are about to drop the column `imageURLs` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imageURLs",
ADD COLUMN     "imageUrls" TEXT[];
