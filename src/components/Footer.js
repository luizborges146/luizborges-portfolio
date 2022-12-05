import React from 'react';
import '../style/App.css'

export default function Footer() {
	return (
        <footer className="text-center text-white">
            <div Nameclass="container pt-4">
            <section className="mb-4">
                <a class="btn btn-link btn-floating btn-lg text-white m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a class="btn btn-link btn-floating btn-lg text-white m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                    <i class="fab fa-github"></i>
                </a>
            </section>
            </div>

            <div className="text-center text-white p-3">© 2022 Copyright:
            <a class="text-white" href="https://github.com/luizborges146">Luiz Borges</a>
            </div>
        </footer>
    )
}

