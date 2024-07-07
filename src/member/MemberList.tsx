import { useEffect, useState } from 'react';

import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { Link } from 'react-router-dom';
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


    const handleDelete = async (id: string | null) => {
        console.log('handleDelete', id);
        if (!id) throw new Error(`Invalid id: ${id}`)

        const taskDocRef = doc(db, 'members', id)
        try {
            await deleteDoc(taskDocRef)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <section className="border-b py-10">
            <div className='text-2xl mb-5'>Memberslist</div>
            {members?.map(member => (
                <div key={member.id} className="grid grid-cols-6 items-center gap-4 mb-4">
                    <div>{member.firstName}</div>
                    <div>{member.lastName}</div>
                    <div>{member.phone}</div>
                    <div>{member.email}</div>
                    <div>{member.dateOfBirth}</div>
                    <div className='flex gap-1'>
                        <Link to={`/${member.id}`} className="p-2 bg-slate-400 hover:bg-slate-300">View</Link>
                        <button className="p-2 bg-slate-400 hover:bg-slate-300" onClick={() => handleDelete(member.id)}>x</button>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default MemberList;