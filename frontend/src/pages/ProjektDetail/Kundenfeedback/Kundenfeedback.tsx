import Components from '@components';

import type { KundenfeedbackProps } from './Kundenfeedback.types';

const Kundenfeedback = ({ project }: KundenfeedbackProps) => (
  <section className="px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <Components.SectionHeading category="Kundenfeedback" heading="Was der Kunde sagt" align="center" />
      {project.testimonial && (
        <Components.TestimonialCard
          quote={project.testimonial.quote}
          author={project.testimonial.author}
          role={project.testimonial.role}
          company={project.testimonial.company}
          className="mx-auto mt-10 max-w-2xl"
        />
      )}
    </div>
  </section>
);

export default Kundenfeedback;
