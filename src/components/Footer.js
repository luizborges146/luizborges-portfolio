import React from 'react';

export default function Footer() {
	return (
        <footer className="text-center text-white">
            <div Nameclass="container pt-4">
            <section className="mb-4">
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
                    <i class="fab fa-github"></i>
                </a>
            </section>
            </div>

            <div className="text-center text-dark p-3">© 2020 Copyright:
            <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    )
}

