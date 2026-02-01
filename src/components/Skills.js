export default function Skills() {
  const skills = [
    ['Plant Operations', 'Large-scale power generation', '90%'],
    ['Project Commissioning', '2×800 MW & 6 MTPA Polypropylene', '100%'],
    ['Team Leadership', 'Cross-functional & multi-industry teams', '100%'],
    ['Maintenance Management', 'Reliability & performance driven', '85%']
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Skills & Expertise</h2>

        {skills.map(([title, desc, level]) => (
          <div key={title} className="mb-4">
            <h5>{title}</h5>
            <p className="mb-1">{desc}</p>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{ width: level }}
              >
                {level}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
