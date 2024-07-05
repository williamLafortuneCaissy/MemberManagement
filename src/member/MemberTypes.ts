import { Timestamp } from "firebase/firestore"

export type MemberType = {
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    // dateOfBirth: Date,
    created: Timestamp
}