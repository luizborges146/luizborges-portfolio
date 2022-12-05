import React from 'react';
import '../style/App.css'

export default function Footer() {
	return (
        <footer className="text-center text-white">
            <div className="container">
            <section className=" remove-margin">
                <a class="btn btn-link btn-floating btn-lg text-white m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                <i class="fab fa-linkedin  icons-footer"></i></a>

                <a class="btn btn-link btn-floating btn-lg text-white m-1" href="https://www.linkedin.com/in/luiz-borges-2377b7142" role="button" data-mdb-ripple-color="dark">
                <i class="fab fa-github icons-footer"></i></a>

            </section>
            </div>

            <div className="text-center text-white p-3">© 2022 Copyright:
            <a class="text-white" href="https://github.com/luizborges146">Luiz Borges</a>
            </div>
        </footer>
    )
}

