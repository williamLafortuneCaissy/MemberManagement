import { Icon } from '@iconify-icon/react';
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
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
        <section>
            <div className="mb-4">
                <Link className='btn btn-sky float-right' to="/member/create">Create</Link>
            </div>

            <div className='text-2xl mb-5'>Memberslist</div>
            <div className="border  rounded-xl overflow-hidden">
                <table className="w-full bg-white">
                    <thead className='text-left'>
                        <tr>
                            <th className="font-normal bg-slate-100 py-2 px-3">First Name</th>
                            <th className="font-normal bg-slate-100 py-2 px-3">Last Name</th>
                            <th className="font-normal bg-slate-100 py-2 px-3">Phone</th>
                            <th className="font-normal bg-slate-100 py-2 px-3">Email</th>
                            <th className="font-normal bg-slate-100 py-2 px-3">Date of Birth</th>
                            <th className="font-normal bg-slate-100 py-2 px-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {members?.map(member => (
                            <tr key={member.id}>
                                <td className="py-2 px-3 border-t ">{member.firstName}</td>
                                <td className="py-2 px-3 border-t ">{member.lastName}</td>
                                <td className="py-2 px-3 border-t ">{member.phone || '-'}</td>
                                <td className="py-2 px-3 border-t ">{member.email || '-'}</td>
                                <td className="py-2 px-3 border-t ">{member.dateOfBirth || '-'}</td>
                                <td className="p-1 px-3 border-t  text-right">
                                    <Link to={`/${member.id}`} className="btn-icon text-xl hover:bg-slate-100"><Icon icon="mdi:pencil-outline" /></Link>
                                    <button className="btn-icon text-xl hover:bg-slate-100" onClick={() => handleDelete(member.id)}><Icon icon="mdi:bin-outline" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default MemberList;