

export type User = {
    user: {
        id: string,
        email: string,
        name: string,
        image: string,
        hashedPassword: string,
        resetPasswordToken: string,
        resetPasswordExpires: string,
        isVerified: boolean,
        createdAt: Date,
        updatedAt: Date,
        __v: number,
        verifyToken: string,
        verifyTokenExpires: string,

    }
}