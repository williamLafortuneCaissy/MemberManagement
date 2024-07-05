import { useEffect, useState } from 'react';

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from "../firebase";
import { MemberType } from './MemberTypes';

const MemberList = () => {
    const [members, setMembers] = useState<MemberType[]>();

    useEffect(() => {
        const q = query(collection(db, 'members'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setMembers(querySnapshot.docs.map(doc => ({
                id: doc.id,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
                phone: doc.data().phone,
                email: doc.data().email,
                dateOfBirth: doc.data().dateOfBirth,
                created: doc.data().created,
            })))
        })
    }, [])


    return (
        <section className="border-b py-10">
            <div className='text-2xl mb-5'>Memberslist</div>
            {members?.map( member => (
                <div key={member.id} className="grid grid-cols-5 gap-4">
                    <div>{member.firstName}</div>
                    <div>{member.lastName}</div>
                    <div>{member.phone}</div>
                    <div>{member.email}</div>
                    <div>{member.dateOfBirth}</div>
                </div>
            ))}
        </section>
    );
}

export default MemberList;