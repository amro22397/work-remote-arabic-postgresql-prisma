

export type User = {
    user: {
        _id: string,
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