const AddMembers = () => {
    
    return ( 
        <form className="grid grid-cols-2 gap-4">
        <div className="">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-input"
          />
        </div>

        <div className="">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
          />
        </div>

        <div className="">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
          />
        </div>

        <div className="">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
          />
        </div>

        <div className="">
          <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className="form-input"
          />
        </div>

        <div className="col-span-full">
          <button
            type="submit"
            className="btn"
          >
            Submit
          </button>
        </div>
      </form>
    );
}
 
export default AddMembers;