export default function Contact() {
  return (
    <section className="py-5 bg-secondary bg-opacity-10">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Contact</h2>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                
                <p className="mb-2">
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:srivastavamanishk@rediffmail.com"
                    className="text-decoration-none"
                  >
                    srivastavamanishk@rediffmail.com
                  </a>
                </p>

                <p className="mb-2">
                  <strong>Phone:</strong>{' '}
                  <a
                    href="tel:+917747013565"
                    className="text-decoration-none"
                  >
                    +91&nbsp;7747013565
                  </a>
                </p>

                <p className="mb-4">
                  <strong>Location Status:</strong> Open to opportunities
                </p>

                <a
                  href="https://www.linkedin.com/in/manish-kumar-ba6bb08"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  View LinkedIn Profile
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
