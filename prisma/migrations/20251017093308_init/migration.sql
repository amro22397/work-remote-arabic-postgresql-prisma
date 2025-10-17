-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "hashedPassword" TEXT,
    "resetPasswordToken" TEXT,
    "resetPasswordExpires" TIMESTAMP(3),
    "isVerified" BOOLEAN DEFAULT false,
    "verifyToken" TEXT,
    "verifyTokenExpires" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobForm" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "jobTitle" TEXT,
    "jobType" TEXT,
    "jobDuration" TEXT,
    "isThereSalary" BOOLEAN,
    "jobSalary" DOUBLE PRECISION,
    "jobSalaryPer" TEXT,
    "country" TEXT,
    "state" TEXT,
    "city" TEXT,
    "jobPhoto" TEXT,
    "jobFormLink" TEXT,
    "wantEasyApply" BOOLEAN,
    "isThereContact" BOOLEAN,
    "currency" TEXT,
    "contactPhoto" TEXT,
    "contactName" TEXT,
    "contactEmail" TEXT,
    "contactNumber" TEXT,
    "theOtherJobDuration" TEXT,
    "description" TEXT,
    "emailRef" TEXT,

    CONSTRAINT "JobForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
