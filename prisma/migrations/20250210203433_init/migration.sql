-- CreateTable
CREATE TABLE "Coffee" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "origin" TEXT,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "purchase_link" TEXT,
    "price" TEXT,
    "roast_level" TEXT,
    "decaf" BOOLEAN NOT NULL DEFAULT false,
    "decaf_process" TEXT,
    "bitterValue" INTEGER NOT NULL,
    "nuttyValue" INTEGER NOT NULL,
    "sweetValue" INTEGER NOT NULL,
    "fruityValue" INTEGER NOT NULL,
    "floralValue" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Coffee_id_key" ON "Coffee"("id");
