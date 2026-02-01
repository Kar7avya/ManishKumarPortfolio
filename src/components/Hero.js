import manish from '../manish.jpg';

export default function Hero() {
  return (
    <section className="vh-100 d-flex align-items-center">
      <div className="container text-center">
        <img
          src={manish}
          alt="Manish Kumar"
          className="rounded-circle mb-4"
          width="180"
          height="180"
        />

        <h1 className="fw-bold">Manish Kumar</h1>
        <h4 className="text-secondary">Cross-Functional Industrial Leader</h4>

        <p className="lead mt-4">
          30+ years · Power Generation & Heavy Industry
        </p>

        <p className="text-muted">
          Currently associated with Adani Power Ltd
        </p>
      </div>
    </section>
  );
}
