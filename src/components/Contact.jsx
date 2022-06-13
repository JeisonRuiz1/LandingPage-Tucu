import React from 'react';


const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-tittle'>
                <h1>Trabaja con nosotros</h1>
            </div>
            <div className='contact-content'>
                <div className='contact-content_info'>
                    <h2>Haz parte de la comunidad que busca transformar El Delivery en LATAM</h2>
                    <p>Si te interesa alguno de nuestros cargos vacantes, empieza por postularte aquí y adjunta tu curriculum vitae.
                        Buscamos repartidores, desarrolladores y talento humano para nuestra expanción. </p>
                </div>
                <div className='contact-content_form'>
                    <h2>Postularse ahora</h2>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact;