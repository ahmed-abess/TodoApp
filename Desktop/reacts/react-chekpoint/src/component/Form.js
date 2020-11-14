

const Form=()=>{
    return(
        <form>
            <div className="form-group">
                <label htmlFor="exemplefornme">Nom</label>
                <input type="text" className="form-control"
                       placeholder="Enter votre nom" />

            </div>

            <div className="form-group">
                <label htmlFor="exemplefornme">Prenom</label>
                <input type="text" className="form-control"
                       placeholder="Enter votre prenom"/>

            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    )
}

export default Form;
