export default function Experience() {
  const roles = [
    [
      'Operations & Maintenance Leader',
      'Adani Power Ltd',
      'Present',
      'O&M of 2×660 MW supercritical plant, safety enforcement, performance optimization'
    ],
    [
      'Associate Vice President',
      'Adani Power Jharkhand Ltd',
      'Jul 2021 – Apr 2025',
      'Commissioning head, maintenance leadership, vendor coordination'
    ],
    [
      'General Manager',
      'GMR Power Ltd',
      '2015 – 2021',
      'Overall plant operations and strategic initiatives'
    ],
    [
      'Sr. DGM Electrical (HOD)',
      'LANCO Anpara',
      '2011 – 2015',
      'Electrical maintenance head, system reliability, team training'
    ],
    [
      'Lead Manager Electrical',
      'Reliance Industries Ltd',
      '2007 – 2011',
      'Electrical commissioning and O&M at Jamnagar'
    ],
    [
      'Electrical Manager',
      'KRIBHCO Shyam Fertilizer Ltd',
      '1997 – 2007',
      'Electrical systems management and team leadership'
    ],
    [
      'Service Engineer',
      'Jyoti Ltd',
      '1994 – 1997',
      'High-voltage switchgear installation and field service'
    ]
  ];

  return (
    <section className="py-5 bg-secondary bg-opacity-10">
      <div className="container">
        <h2 className="fw-bold mb-4 text-center">Professional Experience</h2>

        {roles.map(([role, company, duration, desc]) => (
          <div key={role} className="mb-4">
            <h5>{role}</h5>
            <strong>{company}</strong>
            <p className="text-muted">{duration}</p>
            <p>{desc}</p>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
