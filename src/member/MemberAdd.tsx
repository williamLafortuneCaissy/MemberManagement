
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { useReducer } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { memberFormActions, memberFormInit, memberFormReducer } from './memberFormReducer'

const MemberAdd = () => {
    const [memberForm, memberFormDispatch] = useReducer(memberFormReducer, memberFormInit)
    const navigate = useNavigate()

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'members'), {
                firstName: memberForm.firstName,
                lastName: memberForm.lastName,
                phone: memberForm.phone,
                dateOfBirth: memberForm.dateOfBirth,
                email: memberForm.email,
                created: Timestamp.now()
            })

            navigate('/member')

        } catch (err) {
            alert(err)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        memberFormDispatch({ type: memberFormActions.updateInput, payload: { name, value } })
    }

    return (
        <section>
            <div className="mb-4">
                <Link to={'/member'} className=" text-sky-500">Back</Link>
            </div>
            <div className='text-2xl mb-5'>MembersAdd</div>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-input"
                        value={memberForm.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        value={memberForm.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        value={memberForm.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        value={memberForm.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        className="form-input"
                        value={memberForm.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-span-full">
                    <button
                        type="submit"
                        className="btn btn-sky"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default MemberAdd;