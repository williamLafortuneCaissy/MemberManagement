import { Timestamp } from "firebase/firestore"

export type MemberType = {
    id: string | null,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    dateOfBirth: string,
    created: Timestamp
}